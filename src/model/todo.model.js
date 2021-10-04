const fs = require('fs')
const path = require('path')

const todoModel = {
    getAllChores: function() {
        const allChores = fs.readFileSync(path.join(__dirname, "./todo.json"),{encoding:"utf-8"})
        return JSON.parse(allChores)
    },
    getCreateChore: function(chore){
        const newChore = chore
        const db = todoModel.getAllChores()
        db.push(newChore)
        fs.writeFileSync(path.join(__dirname, "./todo.json"), JSON.stringify(db), {encoding:"utf-8"})
        return true
    },
    getChoreById: function(id, chore) {
        const choreId = todoModel.getAllChores(id).findIndex(item => item.id == choreId)
        const newChore = chore
        const db = todoModel.getAllChores()
        db[choreId] = {
            id,
            ...newChore
        }
        fs.writeFileSync(path.join(__dirname, "./todo.json"), JSON.stringify(db), {encoding:"utf-8"})
        return true
    },
    getDeleteChoreById: function(id) {
        const deleteId = id
        const findChoreDelete = todoModel.getAllChores(deleteId).filter(item => item.id != deleteId)
        fs.writeFileSync(path.join(__dirname, "./todo.json"),JSON.stringify(findChoreDelete),{encoding:"utf-8"})
        return true
    }

}

module.exports = todoModel

