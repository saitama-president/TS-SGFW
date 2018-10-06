import Express from "Express"

const app:Express.Express=Express();

app.listen(
  9000,()=>{

    console.log("");
    app.get("/",
    (req:Express.Request,res:Express.Response)=>{
      res.json([1,2,3,4,5]);
    });
  }
);

