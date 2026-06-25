import {Column, DataType, Model, HasMany, ForeignKey, BelongsTo, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {GlovesVariations} from "./index";
import {ProductModels} from "../products";

@Table
export class GlovesModels extends Model<InferAttributes<GlovesModels>,InferCreationAttributes<GlovesModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue : false
    })
    declare waterProtection: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })

    declare windProtection: boolean;

    @BelongsTo(() => ProductModels)
    declare parentModel : ProductModels;

    //owner
}