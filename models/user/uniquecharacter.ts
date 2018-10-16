import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class UserUniqueCharacter extends SEQ.Model<Models.UserUniqueCharacter
> {


    @SEQ.PrimaryKey
    @SEQ.Column
    @SEQ.ForeignKey(() => Models.User)
    user_id:number

    @SEQ.PrimaryKey
    @SEQ.Column
    character_id:number

    @SEQ.CreatedAt
    created_at: Date;
   
    @SEQ.UpdatedAt
    updated_at: Date;

}




export default UserUniqueCharacter;  