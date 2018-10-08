"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = __importDefault(require("Express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./core/db"));
dotenv_1.default.config();
const app = Express_1.default();
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
db_1.default.Select(`
  SELECT 1,2,3
`, {});
process.on("exit", () => {
    cleanExit();
});
process.on("SIGINT", () => {
    console.log("SIGINT");
    process.exit();
});
function cleanExit() {
    if (db_1.default.Instance) {
        db_1.default.Instance.connection.end();
    }
}
