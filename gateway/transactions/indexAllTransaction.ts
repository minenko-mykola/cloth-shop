import {OperationResult, Transaction} from "../shared";
import {getProductsOperation} from "../operations/getProductsOperation";

class IndexAllTransaction extends Transaction
{

    async execute(): Promise<OperationResult> {
        const response = await getProductsOperation.execute();
        this._completed.push(getProductsOperation)
        return OperationResult.Completed;
    }
}

export const indexAllTransaction = new IndexAllTransaction([getProductsOperation]);