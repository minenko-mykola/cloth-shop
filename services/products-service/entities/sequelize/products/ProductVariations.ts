import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "./ProductModels";
import {ShirtVariations} from "../shirts";
import {TShirtVariations} from "../tshirts";
import {GlovesVariations} from "../gloves";
import {HeadWearVariations} from "../headwear";
import {BlouseVariations} from "../blouses";

@Table
export class ProductVariations extends Model<InferAttributes<ProductVariations>,InferCreationAttributes<ProductVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue: DataType.UUIDV4,
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

    @HasOne(() => GlovesVariations)
    declare gloves : GlovesVariations;

    @HasOne(() => HeadWearVariations)
    declare headwear : HeadWearVariations;

    @HasOne(() => BlouseVariations)
    declare blouse : BlouseVariations;

    @HasOne(() => ShirtVariations)
    declare shirt : ShirtVariations;

    @HasOne(() => TShirtVariations)
    declare tshirt : TShirtVariations;
}
