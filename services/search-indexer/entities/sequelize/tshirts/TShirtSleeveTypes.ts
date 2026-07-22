import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {TShirtModels} from "./TShirtModels";
import {uuidv7} from "uuidv7";

@Table
export class TShirtSleeveTypes extends Model<InferAttributes<TShirtSleeveTypes>,InferCreationAttributes<TShirtSleeveTypes>>
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

    @HasMany(() => TShirtModels)
    declare tshirts? : TShirtModels[];
}