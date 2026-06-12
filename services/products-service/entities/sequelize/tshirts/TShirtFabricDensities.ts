import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {TShirtModels} from "./index";

@Table
export class TShirtFabricDensities extends Model<InferAttributes<TShirtFabricDensities>,InferCreationAttributes<TShirtFabricDensities>>
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