import {OperationResult} from "./OperationResult";
import {OperationStatus} from "./OperationStatus";
import {Operation} from "./Operation";

export abstract class Transaction {

    abstract execute() : Promise<OperationResult>;

    async rollback() : Promise<OperationResult>
    {
        try{
            for (const operation of this._completed.reverse())
            {
                await operation.rollback();
            }

            return OperationResult.Completed;
        }
        catch(err)
        {
            return OperationResult.Failed;
        }
    }

    protected _status : OperationStatus = OperationStatus.Started;
    protected _operations : Operation[] = [];
    protected _completed : Operation[] = [];

    constructor(operations : Operation[])
    {
        this._operations = operations;
    }

    get status()
    {
        return this._status;
    }
}