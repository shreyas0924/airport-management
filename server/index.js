const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
// const db = require('../config/database')
const mysql = require('mysql')
dotenv.config({ path: '.env' })

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'airport-dbms',
})

//post login data
app.post('/api/staffLogin', (req, res) => {
  const emailStaff = req.body.emailStaff
  console.log(emailStaff)
  const passwordStaff = req.body.passwordStaff
  db.query(
    'insert into logininfostaff (email, password) values (?,?)',
    [emailStaff, passwordStaff],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('1 record inserted')
      }
    }
  )
})

//get airport data
app.get('/api/airport', (req, res) => {
  db.query('SELECT airport_name, city, state FROM airport', (err, result) => {
    if (err) {
      console.log(err)
    } else {
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
