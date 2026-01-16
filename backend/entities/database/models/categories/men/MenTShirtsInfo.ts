import {BelongsTo, Column, ForeignKey, HasOne, Model} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import {Table} from "sequelize-typescript";
import {
    TShirtCollarType, TShirtDensity,
    TShirtFashion, TShirtSeason,
    TShirtSex,
    TShirtSize, TShirtSleeveLength,
    TShirtSleeveType,
    TShirtType
} from "../../../types/enum/tshirts";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "../../../additional";

@Table({
    tableName: "men-tshirts-infos",
    timestamps: true
})
export class MenTShirtsInfo extends Model<InferAttributes<MenTShirtsInfo>,InferCreationAttributes<MenTShirtsInfo>>
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
        type: DataType.ENUM(...Object.values(TShirtType)),
        allowNull: false
    })

    declare type : TShirtType

    @Column({
        type: DataType.ENUM(...Object.values(TShirtSex)),
        allowNull: false,
        defaultValue: TShirtSex.Male
    })

    declare sex : TShirtSex

    @Column({
        type: DataType.ENUM(...Object.values(TShirtSize)),
        allowNull: false
    })

    declare size : TShirtSize

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare price : number;

    @Column({
        type: DataType.ENUM(...Object.values(TShirtFashion)),
        allowNull: false
    })

    declare fashionType : TShirtFashion;

    @Column({
        type: DataType.ENUM(...Object.values(TShirtCollarType)),
        allowNull: false
    })

    declare collar_type : TShirtCollarType;

    @Column({
        type: DataType.ENUM(...Object.values(TShirtSleeveType)),
        allowNull: false
    })

    declare sleeveType : TShirtSleeveType

    @Column({
        type: DataType.ENUM(...Object.values(TShirtSleeveLength)),
        allowNull: false
    })

    declare sleeveLength : TShirtSleeveLength;

    @Column({
        type: DataType.ENUM(...Object.values(TShirtDensity)),
        allowNull: false
    })

    declare density : TShirtDensity;

    @Column({
        type: DataType.ENUM(...Object.values(TShirtSeason)),
        allowNull: false
    })

    declare season : TShirtSeason;

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