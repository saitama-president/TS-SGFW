import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
class MasterItemTag extends SEQ.Model<Models.MasterItemTag>
 {


    @SEQ.PrimaryKey
    @SEQ.Column
    id:number

    @SEQ.Column
    name:string

    @SEQ.Column
    description:string

    @SEQ.CreatedAt
    created_at: Date;
   
    @SEQ.UpdatedAt
    updated_at: Date;
}




export default MasterItemTag;  
