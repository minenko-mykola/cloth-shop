import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo, User} from "./index";

@Table({
    tableName: "photos",
    timestamps: true
})
export class Photo extends Model<InferAttributes<Photo>,InferCreationAttributes<Photo>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id: number;

    @BelongsTo(() => ProductInfo,{
        onDelete: "CASCADE"
    })
    declare product: ProductInfo;

    @ForeignKey(() => ProductInfo)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare product_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare url: string;

    @BelongsTo(() => User, {
        onDelete: "CASCADE"
    })
    declare user: User;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare user_id: number;
}