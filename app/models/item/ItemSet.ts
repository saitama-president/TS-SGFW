import * as SEQ from "sequelize-typescript"
import * as Models from "../models"
import { Column } from "sequelize-typescript";

@SEQ.Table
export default class MasterItemSet extends SEQ.Model<Models.Item.MasterItem> {

    @Column
    private id:number;

    
}