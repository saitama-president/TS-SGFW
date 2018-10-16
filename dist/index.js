"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = __importDefault(require("Express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./core/DB/db"));
dotenv_1.default.config();
const app = Express_1.default();
const router = Express_1.default.Router();
const listen_port = process.env.LISTEN_PORT || 9000;
app.listen(listen_port, () => {
    console.log(`SERVER PROCESS START ${listen_port}`);
    app.use(Express_1.default.static(__dirname + process.env.PUBLIC_DIR || "/../public"));
    app.get("/a", (req, res) => {
        db_1.default.Select("SELECT 1,2,3,4,5")
            .then($result => res.json($result));
    });
});
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
