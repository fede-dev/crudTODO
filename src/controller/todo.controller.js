const todoModel = require('../model')

const todoController = {
    getChores: async(req, res, next)=>{
        try{
            const allChores = await todoModel.getAllChores()
            res.status(200).json(allChores)
           
        }catch(error){
            res.status(400).json("No hay chores " + error.message)
        }
    },
    createChore: async(req, res, next)=> {
        try{
            const newChore = await todoModel.getCreateChore(req.body)
            res.status(200).json(newChore)
          
        }catch(error){
            res.status(400).json("No hay chores nuevas " + error.message)
        }
    },
    updateChore: async(req, res, next)=> {
        try{
            const upDateChore = await todoModel.getChoreById(req.body, req.params.id)
            res.status(200).json( upDateChore )
           
        }catch(error){
            res.status(400).json("No hay updatechores nuevas " + error.message)
        }
    },
    deleteChore: async(req, res, next)=> {
        try{
            const deleteChore = await todoModel.getDeleteChoreById(req.params.id)
            res.status(200).json(deleteChore)
           
        }catch(error){
            res.status(400).json("No hay delete chore " + error.message)
        }
    }
}

module.exports = todoController 