const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');

router.post('/',async function(req,res){
    try {
        const {query}= req.body;
        const rows = await pool.query(query);
        res.status(200).json(rows);
        return;
    } catch (error) {
        res.status(400).send(error.message);
        return;
    }


    res.status(200).json({name:"Shreyas"})
});
module.exports = router;