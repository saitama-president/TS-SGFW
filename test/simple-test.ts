import mysql, { FieldInfo } from "mysql";
import fs from "fs";
import { json } from "Express";
import dotenv, { config } from "dotenv";
import DB from "../core/DB/db";

import D from "../core/DB/table";

dotenv.config();

class user extends D.Table{
  public get Name():string{
    return this.collection<user>().toString();
  }
}

class AX extends D.Table{

} 

var v=new user();
console.log(
  v.Name
);

