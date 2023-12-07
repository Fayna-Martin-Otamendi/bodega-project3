const Pedido = require('../models/pedidos.model')
const User = require('../models/user.model')

async function getAllOrders(req, res) {
    try{
        const orders = await Pedido.findAll({
            where: req.query
        })
        if (orders) {
            return res.status(200).json(orders)
        } else {
            return res.status(404).send('No orders found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function createOrder(req, res) {
    try {
        const order = await Pedido.create({
        })
        return res.status(200).json({message: 'Order created', order})
    } catch (error) {
        res.status(500).send(error)
    }
}

async function modifyOrder(req,res) {
    try{
        const order = await Pedido.update(req.body, {
            where: {
                userId: res.locals.user.id_usuario
            },
        })
        if (contact)
    }
}

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
module.exports = {
    getAllOrders,
    createOrder,
    modifyOrder,

}
