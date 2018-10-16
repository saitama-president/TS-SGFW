"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DBConnectionFactory {
}
exports.DBConnectionFactory = DBConnectionFactory;
class ElasticDB {
    Select($sql, $params = []) {
        return new Promise((OK, NG) => {
            this.connection.query($sql, $params, (e, rows, fields) => {
                if (e) {
                    return NG(e);
                }
                return OK(rows);
            });
        });
    }
}
exports.default = ElasticDB;
