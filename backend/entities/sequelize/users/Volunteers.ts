import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Organisations, Users} from "./index";

@Table
export class Volunteers extends Model<InferAttributes<Volunteers>,InferCreationAttributes<Volunteers>>
{
    @ForeignKey(() => Users)
    @Column({
        type : DataType.CHAR(36),
        primaryKey : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare id : string;

    @ForeignKey(() => Organisations)
    @Column({
        type : DataType.STRING(8),
        allowNull : true,
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
    })

    declare organisation_id : string;

    @Column({
        type : DataType.STRING(10),
        allowNull : false,
        unique : true
    })

    declare tax_number : string;

    @BelongsTo(() => Organisations)
    declare organisation? : Organisations;


    @BelongsTo(() => Users)
    declare user : Users;
}