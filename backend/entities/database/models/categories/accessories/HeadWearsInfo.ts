import {BelongsTo, Column, ForeignKey, Model} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import {Table} from "sequelize-typescript";
import {HeadWearSeasons, HeadWearSex, HeadWearSize, HeadWearType} from "../../../types/enum/headwear";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "../../../additional";

@Table({
    tableName: "headwear-infos",
    timestamps: true
})
export class HeadWearsInfo extends Model<InferAttributes<HeadWearsInfo>,InferCreationAttributes<HeadWearsInfo>>
{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    })
    declare id : number;

    @Column({
        type: DataType.ENUM(...Object.values(HeadWearType)),
        allowNull: false
    })

    declare type : HeadWearType;

    @Column({
        type : DataType.ENUM(...Object.values(HeadWearSize)),
        allowNull: false
    })

    declare size : HeadWearSize;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare price : number;

    @Column({
        type: DataType.ENUM(...Object.values(HeadWearSeasons)),
        allowNull: false
    })

    declare season : HeadWearSeasons;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare visor : boolean;//козирок

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare ears_closed : boolean;//вуха(відкриті/закриті)

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare size_adjuster : boolean;//регулятор розміру(липучка)

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare reflective_elements : boolean;//світловідбивні елементи

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })

    declare ventilation_holes : boolean;//отвори для вентилації("в сіточку")

    @Column({
        type: DataType.ENUM(...Object.values(HeadWearSex)),
        allowNull: false
    })

    declare sex : HeadWearSex;

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
//modified