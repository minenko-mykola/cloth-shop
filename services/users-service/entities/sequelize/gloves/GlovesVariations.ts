import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {GlovesModels} from "./index";

@Table
export class GlovesVariations extends Model<InferAttributes<GlovesVariations>,InferCreationAttributes<GlovesVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        defaultValue : DataType.UUIDV4
    })

    declare id? : string;

    @ForeignKey(() => GlovesModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare model_id : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare size : string;

    @BelongsTo(() => GlovesModels)
    declare model : GlovesModels;

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