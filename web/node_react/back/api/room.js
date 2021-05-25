const { Room } = require('../models')
const resp = require('./response')

const createRoom = async (req, res, next) => {
  const { name, phone } = req.body

  if(!name || !phone) return resp(res, 400)
  
  try {
    const room = await Room.create({ name, phone })
    return resp(res, 201, room)
  } catch (e) { 
    next(e) 
  }
  
}

const readRoom = async (req, res, next) => {
  const { id } = req.params

  if(!id) return resp(res, 400)
  
  try {
    const rooms = await Room.findOne({ id })
    return resp(res, 201, rooms)
  } catch (e) { 
    next(e) 
  }
  
}

const updateRoom = async (req, res, next) => {
  const { id, name, phone } = req.body

  if(!id || !name || !phone) return resp(res, 400)
  
  try {
    const room = await Room.findOne({ id })
    if(!room) return resp(res, 400)

    const [ updated ] = await Room.update({ name, phone }, { where: { id } })

    if(!updated) throw new eor('Update eor')
    
    return resp(res, 203, updated)
  } catch (e) { 
    next(e) 
  }
  
}

const deleteRoom = async (req, res, next) => {
  const { id } = req.body

  if(!id) return resp(res, 400)
  
  try {
    const room = await Room.destroy({ where: { id } })
    console.log(room)
    return resp(res, 201, room)
  } catch (e) { 
    next(e) 
  }
  
}

module.exports = {
  createRoom,
  readRoom,
  updateRoom,
  deleteRoom
}