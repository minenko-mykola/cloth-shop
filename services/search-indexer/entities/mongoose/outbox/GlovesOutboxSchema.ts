import {GlovesSchema} from "../gloves";

export const GlovesOutboxSchema = GlovesSchema.clone().add({
    publishedAt : {
        type: Date,
        default : null
    }
})