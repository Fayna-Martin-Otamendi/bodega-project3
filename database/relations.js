const User = require('../api/models/user.model')
const Bodegas = require('../api/models/bodegas.model')
const Calificaciones = require('../api/models/calificaciones.model')
const Vinos = require('../api/models/vinos.model')
const Tours = require('../api/models/tours.model')
const Reservas = require('../api/models/reservas.model')
const Pedidos = require('../api/models/pedidos.model')
const Detalles__pedidos = require('../api/models/detalles_pedidos.model')


function addRelations() {
  try {
    Calificaciones.hasMany(User)
    User.belongsTo(Calificaciones)

    Calificaciones.hasMany(Vinos)
    Vinos.belongsTo(Calificaciones)

    Bodegas.hasMany(Vinos)
    Vinos.belongsTo(Bodegas)

    Detalles__pedidos.hasMany(Vinos)
    Vinos.belongsTo(Detalles__pedidos)

    Pedidos.hasMany(User)
    User.belongsTo(Pedidos)

    Reservas.hasMany(User)
    User.belongsTo(Reservas)

    Tours.hasMany(Reservas)
    Reservas.belongsTo(Tours)

    Bodegas.hasMany(Tours)
    Tours.belongsTo(Bodegas)

    Pedidos.hasMany(Detalles__pedidos)
    Detalles__pedidos.belongsTo(Pedidos)


    
    console.log('Relations added')
  } catch (error) {
    throw (error)
  }
}

module.exports = addRelations