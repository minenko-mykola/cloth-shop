import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "../products";
import {
    ShirtCollars,
    ShirtCuts,
    ShirtFabricDensities,
    ShirtFashions,
    ShirtFasteners,
    ShirtSleeveLengths, ShirtTypes, ShirtVariations
} from "./index";
import {Seasons, Sexes} from "../shared";

@Table
export class ShirtModels extends Model<InferAttributes<ShirtModels>,InferCreationAttributes<ShirtModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @ForeignKey(() => ShirtCollars)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare collar_id : string;

    @ForeignKey(() => ShirtCuts)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare cut_id : string;

    @ForeignKey(() => ShirtFabricDensities)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fabric_density_id : string;

    @ForeignKey(() => ShirtFashions)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fashion_id : string;

    @ForeignKey(() => ShirtFasteners)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fastener_id : string;

    @ForeignKey(() => ShirtSleeveLengths)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sleeve_length_id : string;

    @ForeignKey(() => ShirtTypes)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare type_id : string;

    @ForeignKey(() => Seasons)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare season_id : string;

    @ForeignKey(() => Sexes)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sex_id : string;

    @BelongsTo(() => ProductModels)
    declare parent_model : ProductModels;

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
    declare sleeve_length : ShirtSleeveLengths;

    @BelongsTo(() => ShirtTypes)
    declare type : ShirtTypes;

    @HasMany(() => ShirtVariations)
    declare variations : ShirtVariations[]
}