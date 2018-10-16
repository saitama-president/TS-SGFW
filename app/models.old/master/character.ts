import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class MasterCharacter extends SEQ.Model<Models.UserUniqueCharacter
> {


    @SEQ.PrimaryKey
    @SEQ.Column
    id:number

    @SEQ.PrimaryKey
    @SEQ.Column
    character_id:number

    @SEQ.CreatedAt
    created_at: Date;
   
    @SEQ.UpdatedAt
    updated_at: Date;
}




export default MasterCharacter;  