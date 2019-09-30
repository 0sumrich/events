const sqlite3 = require('sqlite3')
const path = require('path')
const dbFilePath = path.join(__dirname, '../', '.data/main.db')
const db = new sqlite3.Database(dbFilePath)
module.exports=db