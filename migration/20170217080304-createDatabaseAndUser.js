'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    return db.runSql(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_APP_NAME}`)
        .then(result => db.runSql(`CREATE USER '${process.env.DB_APP_USER}'@'%' IDENTIFIED BY '${process.env.DB_APP_PASSWORD}'`))
        .then(result => db.runSql(`GRANT ALL ON ${process.env.DB_APP_NAME}.* TO '${process.env.DB_APP_USER}'@'%'`));
};

exports.down = function (db) {
    return db.runSql(`DROP DATABASE ${process.env.DB_APP_NAME}`)
        .then(result => db.runSql(`DROP USER ${process.env.DB_APP_USER}@'%'`));
};

exports._meta = {
    "version": 1
};
