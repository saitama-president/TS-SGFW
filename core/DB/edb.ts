import mysql, { FieldInfo, MysqlError } from "mysql"
import DBConnection from "./DBConnection";

export class DBConnectionFactory{
  

  
}

export default abstract class ElasticDB{

  
  public abstract get Connection():mysql.connection;

  

  
  public Select($sql: string, $params: any=[]): Promise<Object> {
    return new Promise<Object>(
      (OK, NG) => {
        this.connection.query(
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

