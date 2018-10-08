import mysql, { FieldInfo } from "mysql";
import fs from "fs";
import { json } from "Express";
import dotenv, { config } from "dotenv";
import DB from "../core/DB/db";

dotenv.config();


var n=fs.readFileSync("./config/database.json").toString();

const db:mysql.Connection=mysql.createConnection(JSON.parse(n));
console.dir(process.env.DB_HOST);
process.env.AIUEO="AA";

var result=db.query(`
  SELECT 1 as A,2,3
  UNION SELECT 44 as A,2,3
`,(
  err:mysql.MysqlError,
  rows:Array<any>,
  fields:FieldInfo)=>{
    rows.forEach($row=>{
      console.dir($row);
    });
});



db.end();