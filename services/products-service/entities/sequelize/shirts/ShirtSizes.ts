import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ShirtVariations} from "./index";

@Table
export class ShirtSizes extends Model<InferAttributes<ShirtSizes>,InferCreationAttributes<ShirtSizes>>
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

    @HasMany(() => ShirtVariations)
    declare shirts? : ShirtVariations[];
}