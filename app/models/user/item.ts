import * as SEQ from "sequelize-typescript"
import * as Models from "../models"


@SEQ.Table
class UserItem extends SEQ.Model<Models.User.UserItem> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.ForeignKey(() => Models.Item.ItemMaster)
    @SEQ.Column
    item_id: number;

    

        
    @SEQ.ForeignKey(() => Models.User.User)    
    @SEQ.Column
    user_id:number

    @SEQ.BelongsTo(()=>Models.User.User)
    user:Models.User.User
}



export default UserItem;  