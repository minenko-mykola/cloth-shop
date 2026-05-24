import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {BlouseVariations} from "./BlouseVariations";

@Table
export class BlouseSizes extends Model<InferAttributes<BlouseSizes>,InferCreationAttributes<BlouseSizes>>
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

    @HasMany(() => BlouseVariations)
    declare variations? : BlouseVariations[];
}