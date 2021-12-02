const express = require('express');
const { moodleWebhook } = require('../app/controller/moodleController');
const router = express.Router();

// router.use('/api', require("./api/v1"));

router.get('/', (req, res) => {
    res.status(200).json({status:true, message: "response data success"})
})

router.post('/moodle/webhook', moodleWebhook)
module.exports = router;