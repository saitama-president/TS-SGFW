import mysql, { FieldInfo, MysqlError } from "mysql"

export default class DB {
  private static $instance: DB;

  public connection: mysql.Connection;



  private constructor() {
    this.connection = mysql.createConnection({
      "host": process.env.DB_HOST,
      "user": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_DATABASE
    });
  }


  public static get Instance(): DB {
    if (!DB.$instance) {
      DB.$instance = new DB();

      
    }
    return DB.$instance;
  }

  public static Select($sql: string, $params: any): Promise<Object> {
    return new Promise<Object>(
      (OK, NG) => {

        DB.Instance.connection.query(
          $sql,
          $params,
          (e, rows, fields) => {
            console.log(typeof (e));
            console.log(typeof (rows));
            console.log(typeof (fields));
            return OK(rows)
          });

      }
    );
  }


}

