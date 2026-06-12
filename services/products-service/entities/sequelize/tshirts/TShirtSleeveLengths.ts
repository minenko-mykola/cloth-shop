import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {TShirtModels} from "./index";

@Table
export class TShirtSleeveLengths extends Model<InferAttributes<TShirtSleeveLengths>,InferCreationAttributes<TShirtSleeveLengths>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : DataType.UUIDV4,
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