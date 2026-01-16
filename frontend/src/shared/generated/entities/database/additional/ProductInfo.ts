import {BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {GlovesInfo, HeadWearsInfo} from "../models/categories/accessories";
import {MenShirtsInfo, MenTShirtsInfo} from "../models/categories/men";
import {BlousesInfo, WomenShirtsInfo, WomenTShirtsInfo} from "../models/categories/women";
import {SubCategoryTypes} from "../types/enum";
import {Product} from "./Product.ts";
import {User} from "./User.ts";
import {Photo} from "./Photo.ts";

@Table({
    tableName: "products-infos",
    timestamps: true
})
export class ProductInfo extends Model<InferAttributes<ProductInfo>,InferCreationAttributes<ProductInfo>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id : number;

    @Column({
        type: DataType.ENUM(...Object.values(SubCategoryTypes)),
        allowNull: false
    })

    declare category : SubCategoryTypes;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare description: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare quantity: number;

    @HasOne(() => GlovesInfo,{
        onDelete: "CASCADE"
    })
    declare gloves_info? : GlovesInfo;

    @HasOne(() => HeadWearsInfo,{
        onDelete: "CASCADE"
    })
    declare headwear_info? : HeadWearsInfo;

    @HasOne(() => MenShirtsInfo,{
        onDelete: "CASCADE"
    })
    declare men_shirt_info? : MenShirtsInfo;

    @HasOne(() => MenTShirtsInfo,{
        onDelete: "CASCADE"
    })
    declare men_tshirt_info? : MenTShirtsInfo;

    @HasOne(() => BlousesInfo,{
        onDelete: "CASCADE"
    })
    declare blouses_info? : BlousesInfo;

    @HasOne(() => WomenShirtsInfo,{
        onDelete: "CASCADE"
    })
    declare women_shirt_info? : WomenShirtsInfo;

    @HasOne(() => WomenTShirtsInfo,{
        onDelete: "CASCADE"
    })
    declare women_tshirt_info? : WomenTShirtsInfo;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare product_id : number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare user_id : number;

    @BelongsTo(() => User,{
        onDelete: "CASCADE"
    })
    declare user : User;

    @HasMany(() => Photo,{
        onDelete: "CASCADE"
    })
    declare photos? : Photo[];

    @BelongsTo(() => Product,{
        onDelete: "CASCADE"
    })
    declare product : Product;
}