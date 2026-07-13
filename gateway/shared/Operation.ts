import {OperationResult} from "./OperationResult";
import {OperationStatus} from "./OperationStatus";

export abstract class Operation {

    abstract execute() : Promise<OperationResult>;
    abstract rollback() : Promise<OperationResult>;
    protected _status : OperationStatus = OperationStatus.Started;

    get status()
    {
        return this._status;
    }
}