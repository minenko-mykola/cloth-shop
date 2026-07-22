import {LogName} from "./LogName";
import {LogStatus} from "./LogStatus";

export interface ILogDto
{
    id : string
    operationId? : string
    name? : LogName
    status? : LogStatus
}