import * as SEQ from "sequelize-typescript"
import * as Models from "./models"


@SEQ.Table
class Item extends SEQ.Model<Models.Item> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.Column
    n: number;

        
    @SEQ.ForeignKey(() => Models.User)    
    @SEQ.Column
    user_id:number

    @SEQ.BelongsTo(()=>Models.User)
    user:Models.User
}



export default Item;  