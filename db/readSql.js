const fs = require("fs");
const path = require("path");
const sql = fn => {
  const p = path.join(process.cwd(), "db", fn);
  const string = fs.readFileSync(p).toString();
  return string;
};

module.exports = sql;
