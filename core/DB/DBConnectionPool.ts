import mysql, { FieldInfo, MysqlError, Connection } from "mysql"


export default class ConnectionPool {
  private static $instance: ConnectionPool;

  public connection: mysql.Connection;

  public pool:{
    name:string,
    conn:mysql.Connection[]
  }[]=[];

  

  private constructor() {
    this.connection = mysql.createConnection({
      "host": process.env.DB_HOST,
      "user": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_DATABASE
    });
  }


  public static get Connection(name:string):Connection {
    if (!DB.$instance) {
      DB.$instance = new DB();

      
    }
    return DB.$instance;
  }
  

  public static Select($sql: string, $params: any=[]): Promise<Object> {
    return new Promise<Object>(
      (OK, NG) => {

        DB.Instance.connection.query(
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

