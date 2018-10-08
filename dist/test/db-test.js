"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var n = fs_1.default.readFileSync("./config/database.json").toString();
const db = mysql_1.default.createConnection(JSON.parse(n));
console.dir(process.env.DB_HOST);
process.env.AIUEO = "AA";
var result = db.query(`
  SELECT 1 as A,2,3
  UNION SELECT 44 as A,2,3
`, (err, rows, fields) => {
    rows.forEach($row => {
        console.dir($row);
    });
});
db.end();
