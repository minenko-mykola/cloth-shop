import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {TShirtModels} from "./index";

@Table
export class TShirtCollars extends Model<InferAttributes<TShirtCollars>,InferCreationAttributes<TShirtCollars>>
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