import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ShirtModels} from "./index";

@Table
export class ShirtFashions extends Model<InferAttributes<ShirtFashions>,InferCreationAttributes<ShirtFashions>>
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

    @HasMany(() => ShirtModels)
    declare shirts? : ShirtModels[];
}