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
        }

    }catch(error){
        next(error)
    }
}