const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
// const db = require('../config/database')
const mysql = require("mysql");
dotenv.config({ path: '.env' })

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'airport-dbms',
})

app.get('/airport', (req, res) => {
  db.query('SELECT airport_name, city, state FROM airport', (err, result) => {
    if(err) {
      console.log(err)
    }
    else{
      res.send(result)
    }
  })
})


// app.get('/', (request, response) => {
//   response
//     .status(200)
//     .send('Head to /user/:id and replace :id with your user id')
// })

// const airportRouter = require('./airport')
// app.use('/airport', airportRouter)

// const airlineRouter = require('./routes/airline')
// app.use('/airline', airlineRouter)

// const queriesRouter = require('./routes/queries.js')
// app.use('/queries', queriesRouter)

app.listen(3001, () => {
  console.log('Yey, your server is running on port 3001')
})
