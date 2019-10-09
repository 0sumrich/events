const Database = require("sqlite-async");
const moment = require("moment");
const readSql = require("./readSql.js");
const query = readSql("./sql/events_att_all.sql");
const gpb = n =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    n
  );

async function getAll() {
  const db = await Database.open("./.data/main.db");
  const rows = await db.all(query);
  let res = {};
  rows.forEach(row => {
    const takings = row.Charge == 0 ? null : gpb(row.Charge);
    row.Charge = takings;
    const year = moment(row.Date).year();
    if (res.hasOwnProperty(year)) {
      res[year].push(row);
    } else {
      res[year] = [row];
    }
  });
  return res;
}

module.exports = getAll;
