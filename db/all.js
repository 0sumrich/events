const db = require('./db')
const sql = require('./sql')
const query = sql('./sql/events_att_all.sql')
const moment = require('moment')
const all = {}

const gpb = (n) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n);

db.all(query, [], (err, rows) => {
  if (err) throw err;
  rows.forEach(row => {
    const takings = row.Charge == 0 ? null : gpb(row.Charge)
    row.Charge = takings
    const year = moment(row.Date).year()
    if(all.hasOwnProperty(year)){
    	all[year].push(row)
    } else {
		all[year] = [row]
    }
  })
})
module.exports = all