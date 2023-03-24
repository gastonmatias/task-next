import prisma from "@/database/prisma";

export default function handler (req, res) {
    switch (req.method) {
        case 'PUT':
            updateTask(req,res)
            break;

        case 'GET':
            getTaskById(req,res)
            break;

        case 'DELETE':
            deleteTaskById(req,res)
            break;
    
        default:
            break;
    }
}

const updateTask = async(req,res) => {
    
    const {id} = req.query
    const idParsed = Number(id)
    const {
        title = taskToUpdate.title ,
        description = taskToUpdate.description
    } = req.body;

    try {
        const taskToUpdate = await prisma.task.findUnique({
            where:{
                id: idParsed
            }
        })
        
        if (!taskToUpdate) {
            res.status(400).json({
                message: `Task with id ${idParsed} not found!`,
                status: '404'
            })
        }
    
        const taskUpdated = await prisma.task.update({
            where: {
              id: idParsed,
            },
            data: {
              title: title ,
              description:description 
            }
        })
    
        return res.status(200).json({
            taskUpdated
        })
        
    } catch (err) {
        console.log(err);        
    }

}

const deleteTaskById = async (req, res) => {
    const {id} = req.query
    const idParsed = Number(id)

    try {
        
        const taskToDelete = await searchTaskById(id)

        if (!taskToDelete) {
            return res.status(400).json({
                message: `Task with id ${id} not found!`
            })
        }
    
        const taskDeleted = await prisma.task.delete({
            where: {
              id: idParsed,
            }
        })
    
        return res.status(200).json({
            taskDeleted
        })
        
    } catch (err) {
        console.log(err);        
    }
}

const getTaskById = async(req,res) => {
    const {id} = req.query
    const idParsed = Number(id)

    try {
        const task = await searchTaskById(id,res)

        if (!task) {
            res.status(400).json({
                message: `Task with id ${idParsed} not found!`,
                status: '404'
            })
        }

        return res.status(200).json({
            task
        })

    } catch (err) {
        console.log(err);
    }
}

//! helper
const searchTaskById = async(id) => {
    const idParsed = Number(id)

    return await prisma.task.findUnique({
        where: {
          id: idParsed,
        }
    })

}
