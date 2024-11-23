/*  se importa el paquete {jsonwebtoken} 
en esta parte MIDLEWARE, se hara la respectiva validacion del jsonwebtoken, que entregaran
una respuesta dependiendo si existe el token o no */
import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) =>{
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({error: "token not provided"})
    }
    token = token.split(" ")[1]
    try{
        const {email} = jwt.verify(token, process.env.JWT_SECRET)
        req.email = email
        next()
    } catch (error){
        console.log(error)
        return res.status(400).json({error: "invalid Token"})
    }

}