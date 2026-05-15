import {BelongsTo, Column, ForeignKey, Model} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import {Table} from "sequelize-typescript";
import {
    CutTypes, FabricDensity, FastenerTypes,
    ShirtCollarType,
    ShirtFashionType, ShirtSeasons, ShirtSex,
    ShirtSize,
    ShirtType,
    SleeveLength
} from "../../../types/enum/shirt";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "../../../additional";

@Table({
    tableName: "women-shirts-infos",
    timestamps: true
})
export class WomenShirtsInfo extends Model<InferAttributes<WomenShirtsInfo>,InferCreationAttributes<WomenShirtsInfo>>
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
        type: DataType.ENUM(...Object.values(ShirtType)),
        allowNull: false
    })

    declare type : ShirtType;

    @Column({
        type: DataType.ENUM(...Object.values(ShirtSize)),
        allowNull: false
    })

    declare size : ShirtSize;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare price : number;

    @Column({
        type: DataType.ENUM(...Object.values(ShirtSex)),
        allowNull: false,
        defaultValue : ShirtSex.Female
    })

    declare sex : ShirtSex;

    @Column({
        type: DataType.ENUM(...Object.values(ShirtFashionType)),
        allowNull: false
    })

    declare fashion : ShirtFashionType;

    @Column({
        type: DataType.ENUM(...Object.values(ShirtCollarType)),
        allowNull: false
    })

    declare collar: ShirtCollarType;

    @Column({
        type: DataType.ENUM(...Object.values(SleeveLength)),
        allowNull: false
    })

    declare sleeve : SleeveLength;

    @Column({
        type: DataType.ENUM(...Object.values(FastenerTypes)),
        allowNull: false
    })

    declare fasteners : FastenerTypes;

    @Column({
        type: DataType.ENUM(...Object.values(CutTypes)),
        allowNull: false
    })

    declare cut : CutTypes;

    @Column({
        type: DataType.ENUM(...Object.values(FabricDensity)),
        allowNull: false
    })

    declare density : FabricDensity;

    @Column({
        type: DataType.ENUM(...Object.values(ShirtSeasons)),
        allowNull: false
    })

    declare season : ShirtSeasons;

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