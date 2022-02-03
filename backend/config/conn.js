const mysql = require('mysql')



const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admmaster',
    port: 3306,
    database: 'saudea'
})

con.connect((erro) => {
    if (erro) throw erro
    console.log('Estamos no Banco Ricardo')
})


module.exports = con