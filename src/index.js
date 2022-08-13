const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose')

const route = require('./routes/route.js');

const app = express();

mongoose.connect("mongodb+srv://Aniket:EpboWtWnytBBkVgl@cluster0.bxt9xv1.mongodb.net/Aniket-DB",{
    useNewUrlParser : true

})

.then( () => console.log("MongoDb is Connected"))
.catch( err => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
