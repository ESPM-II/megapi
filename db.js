const Sequelize = require('sequelize');
const Sequelize = require('sequelize');

const UserModel = require('./models/usuarios.js')

const sequelize = new Sequelize('CFlQv0nrel', 'CFlQv0nrel', '9g7ExiNmyS',{
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(()=>{
    console.log('Tablas Sincronizadas');
})

module.exports = {
 User
}