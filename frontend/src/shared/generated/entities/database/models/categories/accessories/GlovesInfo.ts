import {BelongsTo, Column, ForeignKey, Model} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import {Table} from "sequelize-typescript";
import {GlovesSize} from "../../../types/enum";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductInfo} from "../../../additional";

@Table({
    tableName: "gloves-infos",
    timestamps: true
})
export class GlovesInfo extends Model<InferAttributes<GlovesInfo>,InferCreationAttributes<GlovesInfo>>
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
        type: DataType.ENUM(...Object.values(GlovesSize)),
        allowNull: false
    })

    declare size: GlovesSize;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })

    declare price : number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    declare water_protection: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true
    })

    declare wind_protection: boolean;

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