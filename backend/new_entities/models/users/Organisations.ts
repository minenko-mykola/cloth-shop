import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {Volunteers,Heads} from "./index";

@Table
export class Organisations extends Model<InferAttributes<Organisations>,InferCreationAttributes<Organisations>>
{
    @Column({
        type : DataType.STRING(8),
        primaryKey : true
    })

    declare id : string;//ЄДРПОУ

    @ForeignKey(() => Heads)
    @Column({
        type : DataType.CHAR(36),
        allowNull : false,
        unique : true,
        onUpdate : "CASCADE",
        onDelete : "RESTRICT"
    })

    declare head_id : string;

    @Column({
        type : DataType.STRING(100),
        allowNull : false,
        unique : true
    })

    declare name : string;

    @BelongsTo(() => Heads)
    declare head? : Heads;

    @HasMany(() => Volunteers)
    declare volunteers? : Volunteers[];
}