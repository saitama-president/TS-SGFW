import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class MasterItem extends SEQ.Model<Models.MasterItem>
 {

    @SEQ.PrimaryKey
    @SEQ.Column
    item_id:number

    @SEQ.Column
    name:string

    @SEQ.CreatedAt
    created_at: Date;
   
    @SEQ.UpdatedAt
    updated_at: Date;
}




export default MasterItem;  
