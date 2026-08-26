import {HeadWearSchema} from "../headwear";

export const HeadWearOutboxSchema = HeadWearSchema.clone().add({
    publishedAt : {
        type: Date,
        default : null
    }
})