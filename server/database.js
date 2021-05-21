const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('homecollab', 'root', "", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

// var mysql = require('mysql');
// var connect = mysql.createConnection({
//       host: 'localhost'
//     , database: 'your_database'
//     , username: 'user'
//     , password: 'password'});

// var initial_result;

// // check for changes after 1 second

// setTimeout(function(){

//     connect.query('select * from your_table', function(err, result) {
//         if(err) { throw new Error('Failed');}
//         initial_result = initial_result || result;

//         if(Changed(initial_result, result)) { socket.emit('changed', result); }

//     });

//     function Changed(pre, now) {
//   // return true if pre != now
//     }


// }, 1000);

sequelize.sync({alter: true})

module.exports = sequelize