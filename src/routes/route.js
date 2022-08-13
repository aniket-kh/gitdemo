const { application } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const {welcome} = require('../logger/logger');
let {cDay, cMonth, getBatchInfo} = require('../util/helper');
const {trimmer, upper, lower} = require('../validator/formatter');
const router = express.Router();

router.get('/test-me', function (req, res) {
    
    console.log(welcome());
    console.log("Current Date is: " + cDay );
    console.log("Current Month is: " + cMonth );
    console.log(abc.name + getBatchInfo());
    console.log(trimmer());
    console.log("change in Upper Case: " + upper());
    console.log("Change in Lower Case: " + lower());


    res.send('Hello, World!')
});
// test-post-4




    
router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
  // problem 1

let players =
   [

    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },

       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },]

router.post("/players", function(req,res) {
    let newplayer = req.body
    let newplayersName = newplayer.name
    let isNameRepeated = false

    

    for(let i = 0; i< players.length; i++) {
        if(players[i].name == newplayersName){
            isNameRepeated = true;
             break;


        }
    }
    if(isNameRepeated){
        // it means playres ie exists
        res.send("this player was already added!")
    } else {
        // new player entry
        players.push(newplayer)
        res.send(players)
    }
});
module.exports = router;
// adding this comment for no reason


// problem 3

let person = [
    {
        name:"pk",
        age: 10,
        votingstatus: false,
    },
    {
        name:"sk",
        age:20,
        votingstatus: false,
    },
    {
        name:"AA",
        age:70,
        votingstatus: false,
    },
    {
        name:"sc",
        age:5,
        votingstatus: false,
    },
    {
        name:"HO",
        age: 40,
        votingstatus: false,

    }
]

router.post("/eligibleVoter/:age", function(req,res){
    let eligibleAge = req.params.age;
    let eligible =[];
    for(let i=0; i<person.length; i++){
        if(person[i].age>eligibleAge){
            person[i].votingstatus = true;
            eligible.push(person[i])
        }
    }
    res.send(eligible);
});

