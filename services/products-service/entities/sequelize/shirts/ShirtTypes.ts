import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ShirtModels} from "./index";
import {uuidv7} from "uuidv7";

@Table
export class ShirtTypes extends Model<InferAttributes<ShirtTypes>,InferCreationAttributes<ShirtTypes>>
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

    @HasMany(() => ShirtModels)
    declare shirts? : ShirtModels[];
}