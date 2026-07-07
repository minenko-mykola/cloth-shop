import {BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Categories} from "../shared";
import {HeadWearModels} from "../headwear";
import {GlovesModels} from "../gloves";
import {BlouseModels} from "../blouses";
import {ProductVariations} from "./ProductVariations";
import {uuidv7} from "uuidv7";

@Table
export class ProductModels extends Model<InferAttributes<ProductModels>,InferCreationAttributes<ProductModels>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : uuidv7(),
        primaryKey : true
    })

    declare id? : string;

    @ForeignKey(() => Categories)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false
    })

    declare categoryId : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false,
        unique : true
    })

    declare name : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare description: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })

    declare publishDate?: Date;

    @BelongsTo(() => Categories)
    declare category? : Categories;

    @HasOne(() => GlovesModels)
    declare glovesModels? : GlovesModels;

    @HasOne(() => HeadWearModels)
    declare headwearModel? : HeadWearModels;

    @HasMany(() => ProductVariations)
    declare variations? : ProductVariations[];

    @HasOne(() => BlouseModels)
    declare blouseModel? : BlouseModels;
}