import {InferAttributes, InferCreationAttributes} from "sequelize";
import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ProductModels} from "../products";
import {
    BlouseBacks,
    BlouseCollars,
    BlouseFashionTypes,
    BlouseFasteners,
    BlouseLengths,
    BlouseSleeveTypes, BlouseTypes
} from "./index";
import {Seasons} from "../shared";

@Table({
    timestamps: false
})
export class BlouseModels extends Model<InferAttributes<BlouseModels>,InferCreationAttributes<BlouseModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @ForeignKey(() => BlouseBacks)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare backId : string;

    @ForeignKey(() => BlouseCollars)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare collarId : string;

    @ForeignKey(() => BlouseFashionTypes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fashionTypeId : string;

    @ForeignKey(() => BlouseFasteners)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare fastenerId : string;

    @ForeignKey(() => BlouseLengths)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare lengthId : string;

    @ForeignKey(() => BlouseSleeveTypes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare sleeveTypeId : string;

    @ForeignKey(() => BlouseTypes)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare blouseTypeId : string;

    @ForeignKey(() => Seasons)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare seasonId : string;

    @BelongsTo(() => BlouseBacks)
    declare back : BlouseBacks;

    @BelongsTo(() => BlouseCollars)
    declare collar : BlouseCollars;

    @BelongsTo(() => BlouseFashionTypes)
    declare fashionType : BlouseFashionTypes;

    @BelongsTo(() => BlouseFasteners)
    declare fastener : BlouseFasteners;

    @BelongsTo(() => BlouseLengths)
    declare length : BlouseLengths;

    @BelongsTo(() => BlouseSleeveTypes)
    declare sleeveType : BlouseSleeveTypes;

    @BelongsTo(() => BlouseTypes)
    declare type : BlouseTypes;

    @BelongsTo(() => Seasons)
    declare season : Seasons;

    @BelongsTo(() => ProductModels)
    declare model : ProductModels;
}