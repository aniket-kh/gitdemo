const jwt=require('jsonwebtoken')


const authentication=async function(req,res,next){
  try
  {
    let tokan = req.headers['x-auth-token'];
  }
  catch(arr){
    if(!tokan) return res.status(402).send("Tokan is Required")
    console.log(tokan)
}
try
{
    let decodedToken = jwt.verify(tokan, "functionup-plutonium-very-very-secret-key");
}
catch(arr){
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });
}


    let paramId=req.params.userId
    let tokenId=decodedToken.userId
    if(paramId!=tokenId)
       return res.send({status:false , msg:"Authorization failed ' User logged is not allowed to the requested users data"})
    next()

}

module.exports.authentication=authentication