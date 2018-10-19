import mysql, { FieldInfo, MysqlError } from "mysql"
import DBConnection from "./DBConnection";
import * as SEQ from "sequelize-typescript";
import { CLIENT_RENEG_LIMIT } from "tls";


export default class DB {
  private static $instance: DB;

  public static get Instance(): DB {

    if(! this.$instance){
      this.$instance=new DB();
    }
    return this.$instance;
  }
  public get Connection():SEQ.Sequelize{
    return this.$connection;
  }
  public set Connection($seq:SEQ.Sequelize){
    this.$connection=$seq;
  }


  //public $connection:mysql.Connection;

  public $connection:SEQ.Sequelize;



  protected constructor() 
  {
    this.$connection = new SEQ.Sequelize("sqlite:./test2.db");

  }
  
  


  

  public static Select($sql: string, $params: any=[]): Promise<Object> {
    return new Promise<Object>(
      (OK, NG) => 
        this.Instance.Connection.query(
          $sql,
          { 
            replacements: $params, type: this.Instance.Connection.QueryTypes.SELECT
          
          }
          
          ).then($r=>{
            OK($r),
            NG({})
            }
          )    
    );
  }


  public static ReInit(){
    this.Instance.Connection.addModels([
      
    ]);
  }
}



