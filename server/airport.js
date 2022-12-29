const express = require('express')
const router = express.Router()
const db = require('./database')
// const bcrypt = require('bcrypt');

router.get('/', async function (req, res) {
  try {
    const sqlQuery = 'SELECT airport_name, city, state FROM airport'
    const rows = await db.query(sqlQuery)
    res.status(200).json(rows)
    return
  } catch (error) {
    res.status(400).send(error.message)
    return
  }
})

db.query(
  'SELECT aiport_name, city, state from airport',
  function (err, result) {
    if (err) {
      throw err
    }
    console.log(result)
  }
)

router.post('/insert_airport', async function (req, res) {
  try {
    const { airport_name, city, state } = req.body

    const sqlQuery =
      'INSERT INTO airport (airport_name, city,state) VALUES (?,?,?)'
    const result = await db.query(sqlQuery, [airport_name, city, state])

    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.post('/update', async function (req, res) {
  try {
    const { choice, oldairportname, update_value } = req.body
    console.log(typeof choice)
    switch (choice) {
      case 1:
        airport_name = update_value
        const sqlGetUser1 =
          'update airport set airport_name = ? where airport_name = ?'
        const rows1 = await db.query(sqlGetUser1, [
          airport_name,
          oldairportname,
        ])

        if (rows1) {
          res.status(200).send(`Updated Airport name.`)
        }
        return
        break
      case 2:
        city = update_value
        const sqlGetUser2 = 'update airport set city = ? where airport_name = ?'
        const rows2 = await db.query(sqlGetUser2, [city, oldairportname])

        if (rows2) {
          res.status(200).send(`Updated city.`)
        }
        return
        break
      case 3:
        state = update_value
        const sqlGetUser3 =
          'update airport set state = ? where airport_name = ?'
        const rows3 = await db.query(sqlGetUser3, [state, oldairportname])

        if (rows3) {
          res.status(200).send(`Updated state.`)
        }
        return
        break
    }

    res.status(200).send(`airport not found.`)
    return
  } catch (error) {
    res.status(400).send(error.message)
    return
  }
})

router.post('/delete', async function (req, res) {
  try {
    const { airport_name } = req.body
    const sqlQuery = 'DELETE from airport where airport_name = ?'
    const result = await db.query(sqlQuery, airport_name)

    res.status(200).json(result)
    return
  } catch (error) {
    res.status(400).send(error.message)
    return
  }
})
module.exports = router

// router.get('/', async function(req,res){
//     try {
//         const sqlQuery = 'SELECT id, email, password, created_at FROM user WHERE id=?';
//         const rows = await db.query(sqlQuery, req.params.id);
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(400).send(error.message)
//     }

//     res.status(200).json({id:req.params.id})
// });

// router.post('/register', async function(req,res) {
//     try {
//         const {email, password} = req.body;

//         const encryptedPassword = await bcrypt.hash(password,10)

//         const sqlQuery = 'INSERT INTO user (email, password) VALUES (?,?)';
//         const result = await db.query(sqlQuery, [email, encryptedPassword]);

//         res.status(200).json({userId: result.insertId});
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

// router.post('/login', async function(req,res) {
//     try {
//         const {id,password} = req.body;

//         const sqlGetUser = 'SELECT password FROM user WHERE id=?';
//         const rows = await db.query(sqlGetUser,id);
//         if(rows){

//             const isValid = await bcrypt.compare(password,rows[0].password)
//             res.status(200).json({valid_password: isValid});
//         }
//         res.status(200).send(`User with id ${id} was not found`);

//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })
