import {LogName} from "./LogName";
import {LogStatus} from "./LogStatus";

export interface ILog
{
    operationId : string
    name : LogName
    status : LogStatus
}