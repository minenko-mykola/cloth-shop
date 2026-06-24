import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ShirtModels,ShirtSizes} from "./index";

@Table
export class ShirtVariations extends Model<InferAttributes<ShirtVariations>,InferCreationAttributes<ShirtVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        defaultValue : DataType.UUIDV4
    })

    declare id? : string;

    @ForeignKey(() => ShirtModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare model_id : string;

    @ForeignKey(() => ShirtSizes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare size_id : string;

    @BelongsTo(() => ShirtModels)
    declare model : ShirtModels;

    @BelongsTo(() => ShirtSizes)
    declare size : ShirtSizes;

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