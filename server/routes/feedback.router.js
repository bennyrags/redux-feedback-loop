const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Hello from the feedback router!');
})


module.exports = router;