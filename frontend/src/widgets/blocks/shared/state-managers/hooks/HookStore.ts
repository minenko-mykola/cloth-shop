import {FormInfoType, HookTransferType} from "@/shared/types/forms";

export class HookStore<T extends FormInfoType>
{
    protected _hook : HookTransferType<T> | undefined

    protected _isSubmitted : boolean = false

    setHook(hook : HookTransferType<T>): void
    {
        this._hook = hook;
    }

    get hook()
    {
        return this._hook;
    }

    setIsSubmitted(isSubmitted : boolean): void
    {
        this._isSubmitted = isSubmitted;
    }

    get isSubmitted() : boolean
    {
        return this._isSubmitted;
    }
}