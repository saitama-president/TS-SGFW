import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
export default class MasterItemTag extends SEQ.Model<Models.Item.MasterItemTag>
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





