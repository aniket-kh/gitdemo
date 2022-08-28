const jwt =require('jsonwebtoken')


const mid =async function(req,res,next){
    let token = req.headers['x-auth-token']
    if(! token)
    
   return res.send(" token is missing")
   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
next()
}
module.exports.mid =mid