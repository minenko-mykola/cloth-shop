import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {User} from "./index.ts";
import {CartProduct} from "./CartProduct.ts";

@Table({
    tableName: "carts",
    timestamps: true
})
export class Cart extends Model<InferAttributes<Cart>,InferCreationAttributes<Cart>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id : number;

    @BelongsTo(() => User,{
        onDelete: "CASCADE"
    })
    declare user: User;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare user_id: number;

    @HasMany(() => CartProduct,{
        onDelete: "CASCADE"
    })
    declare products : CartProduct[];
}