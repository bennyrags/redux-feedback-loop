const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    res.send('Hello from the feedback router!');
    sqlText = `SELECT * FROM feedback`
    pool.query(sqlText)
    .then(result=> {
        res.send(result.rows);

    })
})


module.exports = router;