// const express = require('express')
// const router = express.Router()
// const db = require('../config/database')
// const app = express()
// // const bcrypt = require('bcrypt');

// app.use(cors());
// app.use(express.json());

// router.get('/', async function (req, res) {
//   try {
//     const sqlQuery = 'SELECT airline_id, airline_name FROM airline'
//     const rows = await db.query(sqlQuery)
//     res.status(200).json(rows)
//     return
//   } catch (error) {
//     res.status(400).send(error.message)
//     return
//   }

//   // res.status(200).send(`Could not select.`)
// })

// router.post('/insert', async function (req, res) {
//   try {
//     const { airline_id, airline_name } = req.body

//     const sqlQuery =
//       'INSERT INTO airline (airline_id,airline_name) VALUES (?,?)'
//     const result = await db.query(sqlQuery, [airline_id, airline_name])

//     res.status(200).json(result)
//   } catch (error) {
//     res.status(400).send(error.message)
//     return
//   }
// })

// router.post('/update', async function (req, res) {
//   try {
//     const { choice, oldairlineid, update_value } = req.body
//     switch (choice) {
//       case 1:
//         airline_id = update_value
//         const sqlGetUser1 =
//           'update airline set airline_id = ? where airline_id = ?'
//         const rows1 = await db.query(sqlGetUser1, [airline_id, oldairlineid])

//         if (rows1) {
//           res.status(200).send(`Updated Airline Id.`)
//         }
//         break
//       case 2:
//         airline_name = update_value
//         const sqlGetUser2 =
//           'update airline set airline_name = ? where airline_id = ?'
//         const rows2 = await db.query(sqlGetUser2, [airline_name, oldairlineid])

//         if (rows2) {
//           res.status(200).send(`Updated airline name.`)
//         }
//         break
//     }

//     res.status(200).send(`airline not found.`)
//   } catch (error) {
//     res.status(400).send(error.message)
//     return
//   }
// })

// router.post('/delete', async function (req, res) {
//   try {
//     const { airline_id } = req.body
//     const sqlQuery = 'DELETE from airline where airline_id = ?'
//     const result = await db.query(sqlQuery, airline_id)

//     res.status(200).json(result)
//   } catch (error) {
//     res.status(400).send(error.message)
//     return
//   }
// })
// module.exports = router
