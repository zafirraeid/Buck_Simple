const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
try{
    const token = req.header('x-auth-token')
if(!token) {
    res.status(401).json({msg: "No token entered"})
}
const checkTkn = jwt.verify(token, process.env.JWT)

if(!checkTkn) {
    res.status(401).json({msg: "Can't delete User as tokens don't match"})
}

res.user = checkTkn.id
next()
}catch(err){
    res.status(500).json({error:err.message})
}
}

module.exports = auth
