const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
});

const Pessoa = sequelize.define('pessoa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
    },
    sobrenome: {
        type: DataTypes.STRING,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "pessoa"
}
);

module.exports = Pessoa;

