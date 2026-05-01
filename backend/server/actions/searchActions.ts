import express from "express";
import {esClient} from "../../elastic-search";

class SearchActions
{
    async getAll(req : express.Request, res : express.Response)
    {
        try {
            const { q } = req.query;

            if (!q || typeof q !== 'string') {
                res.status(400).json({ error: "Query parameter 'q' is required and must be a string" });
                return;
            }

            console.log(`[Search] Query received: "${q}"`);

            // Виконання пошуку
            const result = await esClient.search({
                index: "products",
                query: {
                    multi_match: {
                        query: q,
                        fields: [
                            'product_info.name^3',      // Вага для назви в об'єкті info
                            'product_info.category^2',
                            'product_info.description',
                            'info.name^3',              // На випадок, якщо в іншій моделі поле називається просто info
                            'name^2'                    // На випадок, якщо поле на верхньому рівні
                        ],
                        fuzziness: 'AUTO',
                        prefix_length: 2,
                        operator: "AND",
                        minimum_should_match: "75%"
                    }
                }
            });

            const hits = result.hits.hits.map(hit => ({
                _index: hit._index,
                _score: hit._score,
                ...(hit._source as object)
            }));

            console.log(`[Search] Found ${hits.length} results for "${q}"`);
            res.json({ result : hits });

        } catch (error: any) {
            console.error('[Search Error]:', error.message);

            if (error.meta?.body?.error?.type === 'index_not_found_exception') {
                res.json([]);
                return;
            }

            res.status(500).json({
                error: "Internal Server Error",
                details: error.message
            });
        }
    }
}

export const searchActions = new SearchActions();