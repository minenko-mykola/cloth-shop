import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Users} from "../users";

@Table
export class Sessions extends Model<InferAttributes<Sessions>,InferCreationAttributes<Sessions>>
{
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        defaultValue : DataType.UUIDV4
    })

    declare id? : string;

    @ForeignKey(() => Users)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare userId : string;

    @Column({
        type : DataType.STRING,
        allowNull : false
    })

    declare refreshToken : string;

    @Column({
        type : DataType.DATE,
        allowNull : false
    })

    declare expireTime : Date;

    @BelongsTo(() => Users)
    declare user? : Users;
}