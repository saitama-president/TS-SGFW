import * as SEQ from "sequelize-typescript"
import * as Models from "../models"


@SEQ.Table
export default class ItemMaster extends SEQ.Model<Models.Item.ItemMaster> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;


        
    @SEQ.ForeignKey(() => Models.User.User)    
    @SEQ.Column
    user_id:number

    @SEQ.BelongsTo(()=>Models.User.User)
    user:Models.User.User
}



