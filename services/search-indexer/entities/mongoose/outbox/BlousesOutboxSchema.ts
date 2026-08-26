import {BlouseSchema} from "../blouses/BlouseSchema";

export const BlousesOutboxSchema = BlouseSchema.clone().add({
    publishedAt : {
        type: Date,
        default : null
    }
})