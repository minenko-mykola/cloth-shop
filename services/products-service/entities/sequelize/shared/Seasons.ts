import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {HeadWearModels} from "../headwear";
import {BlouseModels} from "../blouses";
import {ShirtModels} from "../shirts";
import {TShirtModels} from "../tshirts";
import {uuidv7} from "uuidv7";

@Table
export class Seasons extends Model<InferAttributes<Seasons>,InferCreationAttributes<Seasons>>
{
    @Column({
        type : DataType.CHAR(36),
        defaultValue : uuidv7(),
        primaryKey : true
    })

    declare id? : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare name : string;

    @HasMany(() => HeadWearModels)
    declare headwear_models? : HeadWearModels[];

    @HasMany(() => BlouseModels)
    declare blouse_models? : BlouseModels[];

    @HasMany(() => ShirtModels)
    declare shirt_models? : ShirtModels[];

    @HasMany(() => TShirtModels)
    declare tshirt_models? : TShirtModels[];
}