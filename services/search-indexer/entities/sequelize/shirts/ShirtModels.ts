import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "../products";
import {
    ShirtCollars,
    ShirtCuts,
    ShirtFabricDensities,
    ShirtFashions,
    ShirtFasteners,
    ShirtSleeveLengths, ShirtTypes
} from "./index";
import {Seasons, Sexes} from "../shared";

@Table({
    timestamps: false
})
export class ShirtModels extends Model<InferAttributes<ShirtModels>,InferCreationAttributes<ShirtModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id? : string;

    @ForeignKey(() => ShirtCollars)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare collarId : string;

    @ForeignKey(() => ShirtCuts)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare cutId : string;

    @ForeignKey(() => ShirtFabricDensities)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fabricDensityId : string;

    @ForeignKey(() => ShirtFashions)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fashionId : string;

    @ForeignKey(() => ShirtFasteners)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fastenerId : string;

    @ForeignKey(() => ShirtSleeveLengths)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sleeveLengthId : string;

    @ForeignKey(() => ShirtTypes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare typeId : string;

    @ForeignKey(() => Seasons)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare seasonId : string;

    @ForeignKey(() => Sexes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sexId : string;

    @BelongsTo(() => ProductModels)
    declare model : ProductModels;

    @BelongsTo(() => ShirtCollars)
    declare collar : ShirtCollars;

    @BelongsTo(() => ShirtCuts)
    declare cut : ShirtCuts;

    @BelongsTo(() => ShirtFabricDensities)
    declare density : ShirtFabricDensities;

    @BelongsTo(() => ShirtFashions)
    declare fashion : ShirtFashions;

    @BelongsTo(() => ShirtFasteners)
    declare fasteners : ShirtFasteners;

    @BelongsTo(() => Seasons)
    declare season : Seasons;

    @BelongsTo(() => Sexes)
    declare sex : Sexes;

    @BelongsTo(() => ShirtSleeveLengths)
    declare sleeveLength : ShirtSleeveLengths;

    @BelongsTo(() => ShirtTypes)
    declare type : ShirtTypes;
}