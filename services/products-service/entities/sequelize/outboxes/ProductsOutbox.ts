import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {uuidv7} from "uuidv7";
import {ProductModels} from "../products";

@Table
export class ProductsOutbox extends Model<InferAttributes<ProductsOutbox>,InferCreationAttributes<ProductsOutbox>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue: uuidv7(),
        primaryKey : true
    })

    declare id? : string;

    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare modelId : string;

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

    @BelongsTo(() => ProductModels)
    declare model : ProductModels;
}