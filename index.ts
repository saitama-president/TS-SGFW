import Express from "Express"
import dotenv from "dotenv";
import DB from "./core/db";

dotenv.config();

const app:Express.Express=Express();

/*
app.listen(
  9000,()=>{

    console.log("PROCESS START");
    app.get("/",
    (req:Express.Request,res:Express.Response)=>{
      res.json([1,2,3,4,5]);
    });
    
  }
);
*/

DB.Select(`
  SELECT 1,2,3
`,{});

process.on("exit",()=>{
  
  cleanExit();
});

process.on("SIGINT",()=>{
  console.log("SIGINT");
  process.exit();
});

function cleanExit(){
  if(DB.Instance){
    DB.Instance.connection.end();
  }
}