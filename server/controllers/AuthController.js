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
        }

    }catch(error){
        next(error)
    }
}