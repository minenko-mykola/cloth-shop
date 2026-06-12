import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearModels} from "../headwear";
import {ShirtModels} from "../shirts";
import {TShirtModels} from "../tshirts";

@Table
export class Sexes extends Model<InferAttributes<Sexes>,InferCreationAttributes<Sexes>>
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

    //Headwears and others

    @HasMany(() => HeadWearModels)
    declare headwear_models? : HeadWearModels[];

    @HasMany(() => ShirtModels)
    declare shirt_models? : ShirtModels[];

    @HasMany(() => TShirtModels)
    declare tshirt_models? : TShirtModels[];
}

