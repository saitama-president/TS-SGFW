import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class UserUniqueItem extends SEQ.Model
    <Models.User.UserUniqueItem> 
{


    @SEQ.PrimaryKey
    @SEQ.Column
    @SEQ.ForeignKey(() => Models.User.UserUniqueItem)    
    user_id:number

    @SEQ.PrimaryKey
    @SEQ.Column
    item_id:number

    @SEQ.CreatedAt
    created_at: Date;   
    @SEQ.UpdatedAt
    updated_at: Date;

}


export default UserUniqueItem;  