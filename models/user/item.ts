import * as SEQ from "sequelize-typescript"
import * as Models from "../models"


@SEQ.Table
class UserItem extends SEQ.Model<Models.UserItem> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.ForeignKey(() => Models.MasterItem)
    @SEQ.Column
    item_id: number;

    

        
    @SEQ.ForeignKey(() => Models.User)    
    @SEQ.Column
    user_id:number

    @SEQ.BelongsTo(()=>Models.User)
    user:Models.User
}



export default UserItem;  