<<<<<<< HEAD
import getPrismaInstance from "../utils/PrismaClient.js"

export const checkUSer = async(req,res, next) =>{
    try{
        const {email} = req.body
        if(!email){
            return res.json({msg: "Email is Required", status: false})
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where: {email}})

        if(!user){
            return res.json({msg: "User not Found", status: false})
        }
        else{
            return res.json({msg: "user Found" , status: true})
=======
export const checkUser = async(req,res, next) =>{
    try{
        const {email} = req.body
        if(!email){
            return res.json({msg: "Email is required." , status: false})
        }

        const prisma = getPrismaInstance()
        const user = await prisma.user.findUnique({where:{email}})
        console.log(user)
        if(!user){
            return res.json({msg: "User is Not Found", status: false})
        }
        else{
            res.json({msg: "User Founded" , status: true})
>>>>>>> 8e15fac81b636009973baf0ea543ef81ed92866b
        }

    }catch(error){
        next(error)
    }
}