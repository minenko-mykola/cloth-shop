import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "../products";
import {HeadWearTypes} from "./index";
import {Seasons, Sexes} from "../shared";

@Table({
    timestamps: false
})
export class HeadWearModels extends Model<InferAttributes<HeadWearModels>,InferCreationAttributes<HeadWearModels>>
{
    @ForeignKey(() => ProductModels)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @ForeignKey(() => HeadWearTypes)
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

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare visor : boolean;//козирок

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare earsClosed : boolean;//вуха(відкриті/закриті)

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare sizeAdjuster : boolean;//регулятор розміру(липучка)

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare reflectiveElements : boolean;//світловідбивні елементи

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare ventilationHoles : boolean;//отвори для вентилації("в сіточку")

    @BelongsTo(() => ProductModels)
    declare parentModel : ProductModels;

    @BelongsTo(() => HeadWearTypes)
    declare type : HeadWearTypes;

    @BelongsTo(() => Seasons)
    declare season : Seasons;

    @BelongsTo(() => Sexes)
    declare sex : Sexes;
}