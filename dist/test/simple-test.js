"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../core/db"));
dotenv_1.default.config();
db_1.default.Select("SELECT 1,2,?", [
    6
]).then($result => console.dir($result));
