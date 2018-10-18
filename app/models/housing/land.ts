import * as SEQ from "sequelize-typescript"
import * as Models from "../models"

@SEQ.Table
export default class HousingLand {

  
  @SEQ.PrimaryKey
  @SEQ.Column
  user_id: number;

  @SEQ.PrimaryKey
  @SEQ.Column
  land_id: number;
  

}
