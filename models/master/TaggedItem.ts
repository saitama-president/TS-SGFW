import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class MasterTaggedItem extends SEQ.Model<Models.MasterTaggedItem>
 {
    @SEQ.PrimaryKey
    @SEQ.Column
    item_id:number

    @SEQ.PrimaryKey
    @SEQ.Column
    tag_id:string


    @SEQ.CreatedAt
    created_at: Date;
   
    @SEQ.UpdatedAt
    updated_at: Date;
}




export default MasterTaggedItem;  
