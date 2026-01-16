import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "./index.ts";

@Table({
    tableName: "products",
    timestamps: true
})
export class Product extends Model<InferAttributes<Product>,InferCreationAttributes<Product>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id: number;

    @HasOne(() => ProductInfo,{
        onDelete: "CASCADE"
    })
    declare info: ProductInfo;
}