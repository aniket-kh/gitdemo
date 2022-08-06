let currentDate = new Date();
let cDay = currentDate.getDate();

const month = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let cMonth = month[currentDate.getMonth()];

const getBatchInfo = () =>{
    return ", W3D3, the topic for today is Nodejs module system"	
}


module.exports = {cDay, cMonth, getBatchInfo};