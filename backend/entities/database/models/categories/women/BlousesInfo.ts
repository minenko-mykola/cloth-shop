import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import {
    BlouseBack,
    BlouseCollar,
    BlouseFashionType,
    BlouseFasteners, BlouseLength, BlouseSeasons,
    BlouseSize,
    BlouseSleeveType,
    BlouseType
} from "../../../types/enum/blouse";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "../../../additional";

@Table({
    tableName: "women-blouses-infos",
    timestamps: true
})
export class BlousesInfo extends Model<InferAttributes<BlousesInfo>, InferCreationAttributes<BlousesInfo>> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseType)),
        allowNull: false
    })
    declare type: BlouseType;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseSize)),
        allowNull: false
    })
    declare size: BlouseSize;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare price : number;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseFashionType)),
        allowNull: false
    })
    declare fashion_type: BlouseFashionType;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseSleeveType)),
        allowNull: false
    })
    declare sleeve_type: BlouseSleeveType;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseCollar)),
        allowNull: false
    })
    declare collar: BlouseCollar;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseFasteners)),
        allowNull: false
    })
    declare fasteners: BlouseFasteners;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseBack)),
        allowNull: false
    })
    declare back: BlouseBack;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseLength)),
        allowNull: false
    })
    declare length: BlouseLength;

    @Column({
        type: DataType.ENUM(...Object.values(BlouseSeasons)),
        allowNull: false
    })
    declare season: BlouseSeasons;

    @BelongsTo(() => ProductInfo,{
        onDelete: "CASCADE"
    })
    declare product_info: ProductInfo;

    @ForeignKey(() => ProductInfo)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })

    declare product_info_id : number;
}