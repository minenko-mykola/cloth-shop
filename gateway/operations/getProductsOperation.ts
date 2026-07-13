import {Operation, OperationResult} from "../shared";
import axios from "axios";

class GetProductsOperation extends Operation
{
    async execute(): Promise<OperationResult> {
        try
        {
            const response = await axios.get("http://products-service:8004")
            return Promise.resolve(OperationResult.Completed);
        }
        catch(err)
        {
            return Promise.resolve(OperationResult.Failed);
        }
    }

    async rollback(): Promise<OperationResult> {
        try
        {
            return Promise.resolve(OperationResult.Failed);
        }
        catch(err)
        {
            return Promise.resolve(OperationResult.Failed);
        }
    }
}

export const getProductsOperation = new GetProductsOperation();