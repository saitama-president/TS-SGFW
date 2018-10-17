import Express from "express"
import dotenv from "dotenv";
import DB from "./core/DB/db";
import * as Common from "./core/common";

var result=DB.Select(
  "SELECT 'NULLPO' "
).then(
  $q=>{
    console.log("SUCCESS");
    console.dir($q);
  },
  ($f)=>{
    console.log("fail...");
  }
);
