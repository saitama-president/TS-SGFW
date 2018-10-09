import mysql, { FieldInfo, MysqlError } from "mysql"
import DBConnection from "./DBConnection";


export default class DB {
  private static $instance: DB;

  public get connection():mysql.Connection{
    return this.$connection;
  }


  public $connection:mysql.Connection;

  protected constructor() 
  {
    this.$connection = mysql.createConnection({
      "host": process.env.DB_HOST,
      "user": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_DATABASE
    });
  }
  
  

  public static get Instance(): DB {
    return this.$instance;
  }
  

  public static Select($sql: string, $params: any=[]): Promise<Object> {
    return new Promise<Object>(
      (OK, NG) => {
        this.Instance.connection.query(
          $sql,
          $params,
          (e, rows, fields) => {
            if(e){
             return NG(e);
            }
            return OK(rows)
          });
      }
    );
  }
}

