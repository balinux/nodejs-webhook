const express = require('express');
const { webhook, getwebhook } = require('../app/controller/saweriaCpntroller');
// const mainController = require("../app/controller/mainController");
const router = express.Router();

// router.use('/api', require("./api/v1"));

router.get('/', (req, res) => {
    res.status(200).json({status:true, message: "response data success"})
})

router.post('/webhook-saweria', webhook)
router.get('/webhook-saweria', getwebhook)
// router.get('/route-with-controller', mainController.showEvent);

module.exports = router;