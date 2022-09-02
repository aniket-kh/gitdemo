let axios = require("axios")

//2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
// Create API's to do each of the following:
// - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
// - then change the above to get the temperature only( of London)
// - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
// result should look something like this
// [
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
// {city:"Bangalore", temp: 301.2},
// .......
// ]

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1b1e283e190f27da71f91ab123ebf1f2`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
            let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
            console.log(sorted)
            res.status(200).send({ status: true, data: sorted })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//. Axios POST request assignment

// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
// 2. Pick a memeId you want (Eg 129242436) for the POST request
// 3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>
// text0 <text you want as a caption>
// text1 <optional>
// username chewie12345
// password meme@123

// 4. Return a response with a body like this
// "data": {
//         "url": "https://i.imgflip.com/5mvxax.jpg",
//         "page_url": "https://imgflip.com/i/5mvxax"
    // }
    
    const getMemes = async function (req, res) {
        try {
            let options = {
                method: 'get',
                url: 'https://api.imgflip.com/get_memes'
            }
            let result = await axios(options);
            console.log(result)
            let data = result.data
            res.status(200).send({ msg: data, status: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }
    
    const myMeme = async function (req, res) {
        try {
            let template_id = req.query.template_id
            let text0 = req.query.text0
            let text1 = req.query.text1
            let username = req.query.username
            let password = req.query.password
            console.log(`query params are: ${template_id} ${text0} ${text1} ${username} ${password}`)
            var options = {
                method: "get",
                url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
            }
            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }




module.exports.getSortedCities = getSortedCities;
module.exports.getMemes = getMemes; ;
module.exports.myMeme = myMeme;