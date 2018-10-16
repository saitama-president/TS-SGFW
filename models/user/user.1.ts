import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class UserUniqCharacter extends SEQ.Model<Models.UserUniqCharacter> {

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

    @SEQ.HasMany(() => Models.Item)
    items:  Models.Item[];
}



export default User;  