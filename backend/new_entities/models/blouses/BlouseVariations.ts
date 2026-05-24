import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {
    BlouseModels,
    BlouseSizes
} from "./index";

@Table
export class BlouseVariations extends Model<InferAttributes<BlouseVariations>,InferCreationAttributes<BlouseVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : DataType.UUIDV4,
        primaryKey : true
    })

    declare id? : string;

    @ForeignKey(() => BlouseModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare modelId : string;

    @ForeignKey(() => BlouseSizes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sizeId : string;

    @BelongsTo(() => BlouseSizes)
    declare size : BlouseSizes;

    @BelongsTo(() => BlouseModels)
    declare model : BlouseModels;

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
}