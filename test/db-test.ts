import mysql from "mysql";
import fs from "fs";
import { json } from "Express";

var n=fs.readFileSync("../config/database.json").toString();

console.dir(n);
console.log(n);
const db:mysql.Connection=mysql.createConnection(JSON.parse(n));

console.dir(db);

var result=db.query("SELECT 1,2,3");

console.dir(result);