const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Pedido = connection.define('pedido', {
    id_usuario: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      require: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      require: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true
    },   
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
    direccion_envio: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      }, 
  },{
    timestamps: false
  })

  module.exports = Pedido