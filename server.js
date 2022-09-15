const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
//connects our database
const connectDB = require('./config/database')
const indexRouter= require('./routes/index')
const menuRouter= require('./routes/menu')
const loginRouter= require('./routes/login')

//tells our code where to find our .env file
require('dotenv').config({path: './config/.env'})

/*

// Passport config
require('./config/passport')(passport)

*/

//tells our code to run the db
connectDB()


//sets up our view engine as ejs
app.set('view engine', 'ejs')

//telling our code where to find our static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//works with morgan setting the dev config to get detailed info on logs
app.use(logger('dev'))


// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  

  /*
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
*/

app.use(flash())

//add routes here
app.use('/', indexRouter)
app.use('/menu', menuRouter)
app.use('/login', loginRouter)


//start our server
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   