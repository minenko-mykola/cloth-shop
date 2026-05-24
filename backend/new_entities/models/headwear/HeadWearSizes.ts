import {Column, DataType, Model, HasMany, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearVariations} from "./index";

@Table
export class HeadWearSizes extends Model<InferAttributes<HeadWearSizes>,InferCreationAttributes<HeadWearSizes>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : DataType.UUIDV4,
        primaryKey : true
    })

    declare id? : string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })

    declare name : string;

    @HasMany(() => HeadWearVariations)
    declare headwear? : HeadWearVariations[];
}