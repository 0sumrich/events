const fs = require('fs')
const path = require('path')
const sql = fn => {
  const p = path.join(__dirname, fn)
  const string = fs.readFileSync(p).toString()
  return string
}

module.exports = sql;