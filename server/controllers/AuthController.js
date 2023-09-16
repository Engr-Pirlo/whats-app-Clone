import getPrismaInstance from "../utils/PrismaClient"

export const checkUser = async (req, res, next) =>{
    try{
        const {email} = req.body
        if(!email){
            return res.json({msg: "Email is Required", status: false})
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where: {email}})
        if(!user){
            return res.json({msg: "user not Found" , status: false})
        }
        else{
            return res.json({msg: "user Found", status: true})
        }


    }catch(err){
        next(err)
    }
}

