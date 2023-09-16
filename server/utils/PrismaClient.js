<<<<<<< HEAD
import {PrismaClient} from '@prisma/client'
let prismaInstance =null;

function getPrismaInstance(){
    if(!prismaInstance){
        prismaInstance = new PrismaClient()
=======
import { PrismaClient } from "@prisma/client.js";

let prismaInstance = null;

function getInstance(){
    if(!prismaInstance){
        prismaInstance = new PrismaClient
>>>>>>> 8e15fac81b636009973baf0ea543ef81ed92866b
    }
    return prismaInstance
}

<<<<<<< HEAD
export default getPrismaInstance
=======
export default getInstance
>>>>>>> 8e15fac81b636009973baf0ea543ef81ed92866b
