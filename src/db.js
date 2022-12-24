const sqlite3 = require("sqlite3").verbose();
const comments = "./comments.db";

function createDbConnection() {
  const db = new sqlite3.Database(comments, (error) => {
    if (error) {
      return console.error(error.message);
    }
    // createTable(db);
  });
  console.log("Connection with SQLite has been established");
  return db;
}

function createTable(db) {
    db.exec(`
    CREATE TABLE allComments
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      commentIndex INTEGER NOT NULL,
      comment TEXT
    );
  `);
}

function insertRow(index, comment) {

    let db = createDbConnection();
    
    db.run(
      `INSERT INTO allComments (commentIndex, comment) VALUES (?, ?)`,
      [index, comment,],
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
        return selectRows(index)
      }
    );
}

function selectRows(index) {
    db.each(`SELECT * FROM allComments WHERE commentIndex =${index}`, (error, row) => {
      if (error) {
        throw new Error(error.message);
      }
      return row;
    });
  }

module.exports = {
    insertRow,
    selectRows
}