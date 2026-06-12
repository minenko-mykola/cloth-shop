import express from "express";

class Controller {

    async analyze(req : express.Request, res : express.Response) : Promise<void>
    {
        console.log(`[Analytics Service] Successfully get endpoint`)

        try {
            // Якщо тут з'явиться якась логіка з await, вона буде захищена
            res.status(200).json({
                message: "Successfully get endpoint from analytics-service controller!"
            });
        } catch (error) {
            console.error("Error in analyze endpoint:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export const actions = new Controller();