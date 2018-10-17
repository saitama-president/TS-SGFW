

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
    birthday: Date;

//    @SEQ.HasMany(() => Models.UserItem)
//    items:  Models.UserItem[];

//    @SEQ.HasMany(() => Models.UserUniqueCharacter)
//    characters:Models.UserUniqueCharacter[]


}

