//importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//Criar o objeto que ira fazer operções no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utillizar o Objeto de db para nossa operações
// db.serialize(() => {
//     //criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // Inserirn dados na tabela
    // const query = `INSERT INTO places (
    //                     image,
    //                     name,
    //                     address,
    //                     address2,
    //                     state,
    //                     city,
    //                     items
    //                 ) VALUES (?,?,?,?,?,?,?);`

    // const values = [
    //     "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1461&q=80",
    //     'Glasspet',
    //     'Guilherme Gemballa, Jardim América',
    //     'Número 260',
    //     'Santa Catarina',
    //     'Rio do Sul',
    //     'Papéis e Pepelão'
    // ]

    // function afterInsertData(err) {
    //         if(err){
    //             return console.log(err)
    //         }
    //         console.log('Cadastrado com sucesso')
    //         console.log(this)
    // }
    // db.run(query, values, afterInsertData)
//     //consultar dados da tabela
//     db.all('SELECT * FROM places', function(err, rows) {
//         if(err){
//             return console.log(err)
//         }
//         console.log('Registros: ')
//         console.log(rows)
//     })

    // Deletar um dado da tabela

    // db.run('DELETE FROM places WHERE id = ?', [5], function (err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso')
    // })
// })

module.exports = db
