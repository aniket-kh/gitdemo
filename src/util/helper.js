let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;

const getBatchInfo = () =>{
    return ", W3D3, the topic for today is Nodejs module system"	
}


module.exports = {cDay, cMonth, getBatchInfo};