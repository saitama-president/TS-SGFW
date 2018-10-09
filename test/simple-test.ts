import mysql, { FieldInfo } from "mysql";
import fs from "fs";
import { json } from "Express";
import dotenv, { config } from "dotenv";
import DB from "../core/DB/DBConnection";


dotenv.config();

class user extends D.Table{
  public get Name():string{
    return this.collection<user>().toString();
  }
}

