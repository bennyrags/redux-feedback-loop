const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    sqlText = `SELECT * FROM feedback`
    pool.query(sqlText)
        .then(result => {
            res.send(result.rows);

        })
})
router.post('/', (req, res) => {
    let feedbackSubmission = req.body;

    sqlText = `INSERT INTO feedback ("feeling","understanding","support","comments") VALUES ($1,$2,$3,$4);`
    pool.query(sqlText, [feedbackSubmission.feelings, feedbackSubmission.understanding, feedbackSubmission.supported, feedbackSubmission.comments])
        .then(result => {
            res.sendStatus(201);
            console.log(`Result in post submission`, result);
        })
        .catch(error => {
            console.log(`Error in post submission`, error)
        })

})

router.delete('/:id', (req, res) => {
    let sqlText = `DELETE FROM "feedback" WHERE "id"=$1`
    pool.query(sqlText, [req.params.id])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            res.sendStatus(500);
            console.log(`Error deleting event. Here's the error:`, error);

        })
})


module.exports = router;