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
// app.get('/api/staffLogin', (req, res) => {
//   const nameStaff = req.body.nameStaff
//   const emailStaff = req.body.emailStaff
//   const passwordStaff = req.body.passwordStaff
//   // if (!nameStaff || !emailStaff || !passwordStaff) {
//   //   res.send(400)
//   // }

//   db.query(
//     'select name,email,password from registerstaff where name = ? and email = ? and password = ?',

//     [nameStaff, emailStaff, passwordStaff],
//     (err, result) => {
//       if (err) {
//         return err
//       } else {
//         console.log('got data')
//       }
//     }
//   )
// })

//get registered staff data
app.get('/api/staffRegData', (req, res) => {
  db.query('SELECT * from registerstaff', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

//get registered pass data
app.get('/api/passRegData', (req, res) => {
  db.query('SELECT * from registerpassenger', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

// passenger info 
app.get('/api/passengerInfo', (req, res) => {
  db.query('select * from passenger', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
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
        console.log('Inserted Flight')
      }
    }
  )
})

//delete flight
app.post('/api/deleteflight', (req, res) => {
  const flightid = req.body.flightid
  db.query(
    'delete from flight where flight_id = ?',
    [flightid],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Deleted Flight')
      }
    }
  )
})

//delete passenger
app.post('/api/deletepassenger', (req, res) => {
  const passportno = req.body.passportno
  db.query(
    'delete from passenger where passport_no = ?',
    [passportno],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Deleted passenger')
      }
    }
  )
})

//delete staff
app.post('/api/deletestaff', (req, res) => {
  const empid = req.body.empid
  db.query('delete from employee where e_id = ?', [empid], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Deleted staff')
    }
  })
})

// add passenger
app.post('/api/addpassenger', (req, res) => {
  const passportno = req.body.passportno
  const name = req.body.name
  const gender = req.body.gender
  const address = req.body.address
  const dob = req.body.dob
  const flightid = req.body.flightid
  const ticketno = req.body.ticketno
  const bookedby = req.body.bookedby
  db.query(
    'insert into passenger (passport_no, name, address, gender, dob, flight_id, ticket_no, bookedby_name) values (?,?,?,?,?,?,?,?)',
    [passportno, name, address, gender, dob, flightid, ticketno, bookedby],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserted Passenger')
      }
    }
  )
})

//add staff
app.post('/api/addstaff', (req, res) => {
  const empid = req.body.empid
  const name = req.body.name
  const gender = req.body.gender
  const salary = req.body.salary
  const age = req.body.age
  const designation = req.body.designation
  const airportName = req.body.airportName
  db.query(
    'insert into employee (e_id, name, gender, salary, age, designation, airport_name) values (?,?,?,?,?,?,?)',
    [empid, name, gender, salary, age, designation, airportName],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserted Staff')
      }
    }
  )
})

app.listen(3001, () => {
  console.log('Yey, your server is running on port 3001')
})
