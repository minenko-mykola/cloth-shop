import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "../products";
import {
    TShirtCollars,
    TShirtCuts,
    TShirtFabricDensities,
    TShirtFashions,
    TShirtSleeveLengths, TShirtSleeveTypes, TShirtTypes, TShirtVariations
} from "./index";
import {Seasons, Sexes} from "../shared";

@Table
export class TShirtModels extends Model<InferAttributes<TShirtModels>,InferCreationAttributes<TShirtModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @ForeignKey(() => TShirtCollars)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare collarId : string;

    @ForeignKey(() => TShirtCuts)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare cutId : string;

    @ForeignKey(() => TShirtFabricDensities)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fabricDensityId : string;

    @ForeignKey(() => TShirtFashions)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fashionId : string;

    @ForeignKey(() => TShirtSleeveTypes)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sleeveTypeId : string;

    @ForeignKey(() => TShirtSleeveLengths)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sleeveLengthId : string;

    @ForeignKey(() => TShirtTypes)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare typeId : string;

    @ForeignKey(() => Seasons)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare seasonId : string;

    @ForeignKey(() => Sexes)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sexId : string;

    @BelongsTo(() => ProductModels)
    declare parentModel : ProductModels;

    @BelongsTo(() => TShirtCollars)
    declare collar : TShirtCollars;

    @BelongsTo(() => TShirtCuts)
    declare cut : TShirtCuts;

    @BelongsTo(() => TShirtFabricDensities)
    declare density : TShirtFabricDensities;

    @BelongsTo(() => TShirtFashions)
    declare fashion : TShirtFashions;

    @BelongsTo(() => Seasons)
    declare season : Seasons;

    @BelongsTo(() => Sexes)
    declare sex : Sexes;

    @BelongsTo(() => TShirtSleeveTypes)
    declare sleeveType : TShirtSleeveTypes;

    @BelongsTo(() => TShirtSleeveLengths)
    declare sleeveLength : TShirtSleeveLengths;

    @BelongsTo(() => TShirtTypes)
    declare type : TShirtTypes;

    @HasMany(() => TShirtVariations)
    declare variations? : TShirtVariations[]
}