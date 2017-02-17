'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.runSql('CREATE DATABASE ??', [process.env.DB_APP_NAME], callback);
  db.runSql('CREATE USER ?@\'%\' IDENTIFIED BY ?', [process.env.DB_APP_USER, process.env.DB_APP_PASSWORD], callback);
  db.runSql('GRANT ALL ON ??.* TO ?@\'%\'', [process.env.DB_APP_NAME, process.env.DB_APP_USER], callback);
};

exports.down = function(db, callback) {
  db.runSql('DROP DATABASE ??', [process.env.DB_APP_NAME], callback);
  db.runSql('DROP USER ?@\'%\'', [process.env.DB_APP_USER], callback);
};

exports._meta = {
  "version": 1
};
