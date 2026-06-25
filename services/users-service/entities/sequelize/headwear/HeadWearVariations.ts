import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductVariations} from "../products";

@Table
export class HeadWearVariations extends Model<InferAttributes<HeadWearVariations>,InferCreationAttributes<HeadWearVariations>>
{
    @ForeignKey(() => ProductVariations)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare size : string;

    @BelongsTo(() => ProductVariations)
    declare variation : ProductVariations;
}