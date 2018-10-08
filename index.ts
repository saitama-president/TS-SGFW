import Express from "Express"
import dotenv from "dotenv";
import DB from "./core/DB/db";
import { readlink } from "fs";

dotenv.config();

const app:Express.Express=Express();
const listen_port=process.env.LISTEN_PORT||9000;

app.listen(
  listen_port
  ,()=>{
    console.log(`SERVER PROCESS START ${listen_port}`);
    app.use(Express.static("./public"));

    app.get("/a",
    (req:Express.Request,res:Express.Response)=>{

      DB.Select("SELECT 1,2,3,4,5")
      .then(
        $result=>res.json($result)
      );
      
    });
    
  }
);


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