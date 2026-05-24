import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {BlouseModels} from "./index";

@Table
export class BlouseTypes extends Model<InferAttributes<BlouseTypes>,InferCreationAttributes<BlouseTypes>>
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

    @HasMany(() => BlouseModels)
    declare variations? : BlouseModels[];
}