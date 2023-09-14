import { PrismaClient } from "@prisma/client.js";

let prismaInstance = null;

function getInstance(){
    if(!prismaInstance){
        prismaInstance = new PrismaClient
    }
    return prismaInstance
}

export default getInstance