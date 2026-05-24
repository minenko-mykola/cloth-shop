import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {TShirtVariations} from "./index";

@Table
export class TShirtSizes extends Model<InferAttributes<TShirtSizes>,InferCreationAttributes<TShirtSizes>>
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

    @HasMany(() => TShirtVariations)
    declare tshirts? : TShirtVariations[];
}