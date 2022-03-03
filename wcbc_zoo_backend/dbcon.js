const mysql = require('mysql')

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_chambbri',
    password        : '6309',
    database        : 'cs340_chambbri'
})
module.exports.pool = pool;