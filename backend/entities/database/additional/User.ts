import {Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {InferAttributes, InferCreationAttributes} from "sequelize";
import {UserRoles} from "../types/enum/additional";
import {Cart, ProductInfo,Photo} from "./index.ts";

@Table({
    tableName: "users",
    timestamps: true
})
export class User extends Model<InferAttributes<User>,InferCreationAttributes<User>>
{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })

    declare id : number;

    @HasOne(() => Photo,{
        onDelete: "CASCADE"
    })
    declare avatar?: Photo;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare first_name : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare last_name : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare email : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    declare password : string;

    @Column({
        type : DataType.ENUM(...Object.values(UserRoles)),
        allowNull: false,
        defaultValue: UserRoles.User
    })

    declare role : UserRoles;

    @HasMany(() => Cart,{
        onDelete: "CASCADE"
    })
    declare carts? : Cart[];

    @HasMany(() => ProductInfo,{
        onDelete: "CASCADE"
    })
    declare products? : ProductInfo[];
}