module.exports = (sequelize, type) =>{
    return sequelize.define('usuario', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        correo: type.STRING,
        password: type.STRING,
        rut: type.STRING,
        tipo_usuario: type.STRING,
        id_comuna: type.STRING,
        id_ciudad: type.STRING,
        id_pais: type.STRING
    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       module.exports = (sequelize, type) =>{
    return sequelize.define('usuario', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        correo: type.STRING,
        password: type.STRING,
        rut: type.STRING,
        tipo_usuario: type.STRING,
        id_comuna: type.STRING,
        id_ciudad: type.STRING,
        id_pais: type.STRING
    })
}