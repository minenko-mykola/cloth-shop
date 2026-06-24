import {Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Heads, Volunteers} from "./index";
import {Sessions} from "../shared";

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

    @Column({
        type : DataType.STRING(100),
        allowNull : false,
        unique : true
    })

    declare login : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false
    })

    declare password : string;

    @HasOne(() => Volunteers)
    declare volunteer? : Volunteers;

    @HasMany(() => Sessions)
    declare sessions? : Sessions[];

    @HasOne(() => Heads)
    declare head? : Heads;

}