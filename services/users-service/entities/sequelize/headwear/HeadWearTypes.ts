import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearModels} from "./index";
import {uuidv7} from "uuidv7";

@Table
export class HeadWearTypes extends Model<InferAttributes<HeadWearTypes>,InferCreationAttributes<HeadWearTypes>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : uuidv7(),
        primaryKey : true
    })

    declare id? : string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })

    declare name : string;

    @HasMany(() => HeadWearModels)
    declare variations? : HeadWearModels[];
}