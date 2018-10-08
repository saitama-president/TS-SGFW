import mysql, { FieldInfo } from "mysql";
import fs from "fs";
import { json } from "Express";
import dotenv, { config } from "dotenv";
import DB from "../core/db";

dotenv.config();

DB.Select(
  "SELECT 1,2,?",[
    6
  ]
).then($result=>console.dir($result));
