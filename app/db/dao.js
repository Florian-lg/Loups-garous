const sqlite = require('sqlite3').verbose();
const path = require('path');
var fs = require('fs');

export default class Dao {
  constructor() {
    this.dbPath = path.resolve('database.db');
    this.db = new sqlite.Database(this.dbPath);
    this.nbTables = 6;
  }

  initializeTables() {
    var sql = fs.readFileSync(path.resolve('database.sql'), 'utf8');
    sql = sql.split(';');
    for (let i = 0; i < this.nbTables; i++) {
      this.db.run(`${sql[i]};`);
    }
  }

  initializeRelations() {
    var sql = fs.readFileSync(path.resolve('database.sql'), 'utf8');
    sql = sql.split(';');
    for(let i = this.nbTables; i < ((this.nbTables + 0.5) * 2); i++) {
      this.db.run(`${sql[i]};`);
    }
  }
}