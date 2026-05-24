import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Heads, Volunteers} from "./index";

@Table
export class Users extends Model<InferAttributes<Users>,InferCreationAttributes<Users>>
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

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare surname : string;

    @HasOne(() => Volunteers)
    declare volunteer? : Volunteers;

    @HasOne(() => Heads)
    declare head? : Heads;

}