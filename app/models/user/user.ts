

import * as SEQ from "sequelize-typescript"
import * as Models from "../models"
import UserItem from "./item"



@SEQ.Table
export default class User extends SEQ.Model<Models.User.User> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.Column
    name: string;
    public get Name(){
        return this.name;
    }


    @SEQ.Column
    private birthday: Date;

    @SEQ.HasMany(() => Models.User.UserItem)
    private items:  Models.User.UserItem[];

    @SEQ.HasMany(() => Models.User.UserUniqueItem)
    private unique_items:Models.User.UserUniqueItem[]


}

