
import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Organisations, Users} from "./index";

@Table({
    timestamps: false
})
export class Heads extends Model<InferAttributes<Heads>,InferCreationAttributes<Heads>>
{
    @ForeignKey(() => Users)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @Column({
        type : DataType.STRING(10),
        allowNull : false,
        unique : true
    })

    declare taxNumber : string;

    @BelongsTo(() => Users)
    declare user : Users;

    @HasOne(() => Organisations)
    declare organisation : Organisations;

}