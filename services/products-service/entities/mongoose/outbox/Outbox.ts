import mongoose from "mongoose";
import {OutboxSchema} from "./OutboxSchema";
import {BlousesOutboxSchema} from "./BlousesOutboxSchema";
import {GlovesOutboxSchema} from "./GlovesOutboxSchema";
import {HeadWearOutboxSchema} from "./HeadWearOutboxSchema";

export const Outbox = mongoose.model("Outbox", OutboxSchema);

Outbox.discriminator('BlousesOutbox', BlousesOutboxSchema);
Outbox.discriminator('GlovesOutbox', GlovesOutboxSchema);
Outbox.discriminator('HeadWearOutbox', HeadWearOutboxSchema);