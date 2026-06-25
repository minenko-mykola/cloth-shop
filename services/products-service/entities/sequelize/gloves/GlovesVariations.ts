import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {GlovesModels} from "./index";
import {ProductVariations} from "../products";

@Table
export class GlovesVariations extends Model<InferAttributes<GlovesVariations>,InferCreationAttributes<GlovesVariations>>
{
    @ForeignKey(() => ProductVariations)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare size : string;

    @Column({
        type : DataType.DECIMAL(10,2),
        allowNull : false,
        validate : {
            min : 0
        }
    })

    declare price : number;

    @Column({
        type : DataType.INTEGER,
        allowNull : false,
        defaultValue : 0,
        validate : {
            min : 0
        }
    })

    declare quantity : number;

    @BelongsTo(() => ProductVariations)
    declare variantion : ProductVariations;
}