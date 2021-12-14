const express = require('express');
const router = express.Router();


router.post('/',  (req, res) => {
    const {height,weight} = req.body
    const bmi = weight/Math.pow((height/100), 2)
    res.send({bmi})
})

module.exports = router;