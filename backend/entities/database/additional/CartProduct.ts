import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Cart, Product} from "./index";

@Table({
    tableName: "cart-products",
    timestamps: true
})
export class CartProduct extends Model<InferAttributes<CartProduct>,InferCreationAttributes<CartProduct>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id : number;

    @BelongsTo(() => Cart,{
        onDelete: "CASCADE"
    })
    declare cart: Cart;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare cart_id : number;

    @BelongsTo(() => Product,{
        onDelete: "CASCADE"
    })
    declare product: Product;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare product_id : number;
}