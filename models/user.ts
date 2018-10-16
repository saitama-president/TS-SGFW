import * as SEQ from "sequelize-typescript"
import * as Models from "./models"

@SEQ.Table
class User extends SEQ.Model<Models.User> {

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

    @SEQ.HasMany(() => Models.UserItem)
    items:  Models.UserItem[];

    @SEQ.HasMany(() => Models.UserUniqueCharacter)
    characters:Models.UserUniqueCharacter[]


}



export default User;  