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

//login details of passenger and staff
app.post('/api/staffLogin', (req, res) => {
  const nameStaff = req.body.nameStaff
  const emailStaff = req.body.emailStaff
  const passwordStaff = req.body.passwordStaff

  // const nameStaffReg = req.body.nameStaffReg
  // const emailStaffReg = req.body.emailStaffReg
  // const passwordStaffReg = req.body.passwordStaffReg

  db.query(
    // 'insert into logininfostaff (name, email, password) values (?,?,?)',
    'select * from registerstaff where email = ? and name = ? and password = ?',
    // [nameStaff, emailStaff, passwordStaff],
    [emailStaff, nameStaff, passwordStaff],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Logged in staff')
      }
    }
  )
})

app.post('/api/passengerLogin', (req, res) => {
  const namePassenger = req.body.namePassenger
  const emailPassenger = req.body.emailPassenger
  const passwordPassenger = req.body.passwordPassenger
  db.query(
    'insert into logininfopassenger (name, email, password) values (?,?,?)',
    [namePassenger, emailPassenger, passwordPassenger],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('1 record inserted')
      }
    }
  )
})

//Registration details of staff and passenger

app.post('/api/registerstaff', (req, res) => {
  const nameStaffReg = req.body.nameStaffReg
  const emailStaffReg = req.body.emailStaffReg
  const passwordStaffReg = req.body.passwordStaffReg
  db.query(
    'insert into registerstaff (name, email, password) values (?,?,?)',
    [nameStaffReg, emailStaffReg, passwordStaffReg],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Register admin record inserted')
      }
    }
  )
})
app.post('/api/registerpassenger', (req, res) => {
  const nameRegPass = req.body.nameRegPass
  const emailRegPass = req.body.emailRegPass
  const passwordRegPass = req.body.passwordRegPass
  db.query(
    'insert into registerpassenger (name, email, password) values (?,?,?)',
    [nameRegPass, emailRegPass, passwordRegPass],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Register passenger record inserted')
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

//get staff data

app.get('/api/staff', (req, res) => {
  db.query('SELECT * from employee', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

//get flight details
app.get('/api/flight', (req, res) => {
  db.query('select * from flight', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

//get passenger info
app.get('/api/passenger', (req, res) => {
  db.query('select * from passenger order by name', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

//add flight
app.post('/api/insertflight', (req, res) => {
  const flightid = req.body.flightid
  const source = req.body.source
  const destination = req.body.destination
  const status = req.body.status
  const dtime = req.body.dtime
  const atime = req.body.atime
  const airlineid = req.body.airlineid
  const totseats = req.body.totseats
  db.query(
    'insert into flight (flight_id, source, destination,status, d_time, a_time, airline_id, tot_seat) values (?,?,?,?,?,?,?,?)',
    [flightid, source, destination, status, dtime, atime, airlineid, totseats],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Register passenger record inserted')
      }
    }
  )
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
