"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LORM;
(function (LORM) {
    class PrimaryKey extends Array {
        constructor() {
            super();
        }
    }
    LORM.PrimaryKey = PrimaryKey;
    class Table {
        findPK(pk) {
            return [];
        }
        findIndex(column_name, needle) {
        }
        get Columns() {
            return [];
        }
        get TableName() {
            return this.constructor.name;
        }
        collection() {
            return [];
        }
    }
    LORM.Table = Table;
    class Record {
    }
    LORM.Record = Record;
    class Column {
    }
    LORM.Column = Column;
})(LORM = exports.LORM || (exports.LORM = {}));
exports.default = DB;
