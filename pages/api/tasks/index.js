// use `prisma` in your application to read and write data in your DB
import prisma from "@/database/prisma"

export default function handler(req, res) {
 
    switch ( req.method ) {
        case 'GET':
            return getAllTasks(res)
    
        case 'POST':
    
        default:
            res.status(400).json({ message: 'Not found!' })
    }
}

const getAllTasks = async (res) =>{
    
    try {
      
        const tasks = await prisma.task.findMany()
    
        res.status(200).json({
            message:'Ok',
            tasks
        })

    } catch (err) {
        console.log(err);
    }
}
