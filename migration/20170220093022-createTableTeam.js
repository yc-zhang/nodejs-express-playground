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
    let sql = `
    CREATE TABLE IF NOT EXISTS ${process.env.DB_APP_NAME}.team (
        id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        nation VARCHAR(20) NOT NULL,
        game_type VARCHAR(20) NOT NULL,
        description TEXT NOT NULL,
        birthday DATE NOT NULL,
        comment TEXT,
        image_path VARCHAR(300),
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        updated_at TIMESTAMP NOT NULL DEFAULT now()
    )`;
    return db.runSql(sql);
};

exports.down = function (db) {
    let sql = `
        DROP TABLE IF EXISTS ${process.env.DB_APP_NAME}.team;
    `;
    return db.runSql(sql);
};

exports._meta = {
    "version": 1
};
