import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearModels, HeadWearSizes} from "./index";

@Table
export class HeadWearVariations extends Model<InferAttributes<HeadWearVariations>,InferCreationAttributes<HeadWearVariations>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        defaultValue : DataType.UUIDV4
    })

    declare id? : string;

    @ForeignKey(() => HeadWearModels)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare modelId : string;

    @ForeignKey(() => HeadWearSizes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sizeId : string;

    @BelongsTo(() => HeadWearSizes)
    declare size : HeadWearSizes;

    @BelongsTo(() => HeadWearModels)
    declare model : HeadWearModels;

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