const express = require('express');
const abc = require('../introduction/intro')
// const {welcome} = require('../logger/logger');
// let {cDay, cMonth, getBatchInfo} = require('../util/helper');
// const {trimmer, upper, lower} = require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // console.log(welcome());
    // console.log("Current Date is: " + cDay );
    // console.log("Current Month is: " + cMonth );
    // console.log(abc.name + getBatchInfo());
    // console.log(trimmer());
    // console.log("change in Upper Case: " + upper());
    // console.log("Change in Lower Case: " + lower());


    res.send('Hello, World!')
});
module.exports = router;
// adding this comment for no reason