import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearModels} from "../headwear";

@Table
export class ProductVariations extends Model<InferAttributes<ProductVariations>,InferCreationAttributes<ProductVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        defaultValue : DataType.UUIDV4
    })

    declare id? : string;

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

    @BelongsTo(() => HeadWearModels)
    declare model : HeadWearModels;

    @ForeignKey(() => HeadWearModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare modelId : string;
}
