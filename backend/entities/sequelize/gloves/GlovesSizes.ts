import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {GlovesVariations} from "./index";

@Table
export class GlovesSizes extends Model<InferAttributes<GlovesSizes>,InferCreationAttributes<GlovesSizes>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true
    })

    declare id? : string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })

    declare name : string;

    @HasMany(() => GlovesVariations)
    declare gloves? : GlovesVariations[];
}