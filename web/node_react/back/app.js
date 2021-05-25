const createError   = require('http-errors')
const express       = require('express')
const path          = require('path')
const cookieParser  = require('cookie-parser')
const logger        = require('morgan')
const { sequelize } = require('./models')

/* API LIST */
const indexAPI = require('./api/index')
const roomAPI  = require('./api/room')
const usersRouter = require('./api/users')

const app = express()
sequelize.sync()

// view engine setup
app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))

app

  .post('/room/create',   roomAPI.createRoom)
  .get('/room/read/:id',  roomAPI.readRoom)
  .post('/room/update',   roomAPI.updateRoom)
  .post('/room/delete',   roomAPI.deleteRoom)

app

  .use(function(req, res, next) { next(createError(404)) }) 
  .use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    console.error(err)
    return res.status(err.status || 500).json({ result: 'error' })
  })

module.exports = app
