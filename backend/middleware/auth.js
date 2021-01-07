const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
try{
    const token = req.header('x-auth-token')
if(!token) {
    res.status(401).json({msg: "You need to be logged in or signed up"})
}
const checkTkn = jwt.verify(token, process.env.JWT)

if(!checkTkn) {
    res.status(401).json({msg: "You need to be logged in or signed up"})
}

res.user = checkTkn.id
next()
}catch(err){
   res.status(500).json({error:err.message})
}
}

module.exports = auth
