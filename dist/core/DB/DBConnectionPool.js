"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class ConnectionPool {
    constructor() {
        this.pool = [];
        this.connection = mysql_1.default.createConnection({
            "host": process.env.DB_HOST,
            "user": process.env.DB_USER,
            "password": process.env.DB_PASS,
            "database": process.env.DB_DATABASE
        });
    }
    static get Connection(name) {
        if (!DB.$instance) {
            DB.$instance = new DB();
        }
        return DB.$instance;
    }
    static Select($sql, $params = []) {
        return new Promise((OK, NG) => {
            DB.Instance.connection.query($sql, $params, (e, rows, fields) => {
                if (e) {
                    return NG(e);
                }
                return OK(rows);
            });
        });
    }
}
exports.default = ConnectionPool;
