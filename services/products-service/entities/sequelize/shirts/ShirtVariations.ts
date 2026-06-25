import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ShirtSizes} from "./index";
import {ProductVariations} from "../products";

@Table
export class ShirtVariations extends Model<InferAttributes<ShirtVariations>,InferCreationAttributes<ShirtVariations>>
{
    @ForeignKey(() => ProductVariations)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id? : string;

    @ForeignKey(() => ShirtSizes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sizeId : string;

    @BelongsTo(() => ShirtSizes)
    declare size : ShirtSizes;

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
    declare variation : ProductVariations;
}