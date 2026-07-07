import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {BlouseModels} from "./index";
import {uuidv7} from "uuidv7";

@Table
export class BlouseSleeveTypes extends Model<InferAttributes<BlouseSleeveTypes>,InferCreationAttributes<BlouseSleeveTypes>>
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

    @HasMany(() => BlouseModels)
    declare variations? : BlouseModels[];
}