import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {ProductModels} from "../products";

@Table
export class Categories extends Model<InferAttributes<Categories>,InferCreationAttributes<Categories>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : DataType.UUIDV4,
        primaryKey : true
    })

    declare id? : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare name : string;

    @HasMany(() => ProductModels)
    declare products? : ProductModels[];
}