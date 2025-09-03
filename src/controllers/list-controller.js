//No list controller é onde faremos todos os controles das listas, salvar editar, exibir ou excluir usando os métodos do list-model

const listModel = require("../models/list-model")
const userModel = require("../models/user-model")
const { checkUserById } = require("./user-controller")

module.exports =  {
    // GET /users/:idUser/lists
    getListsUser: (req, res) => {
        const { idUser } = req.params

        const verifyUser = userModel.getUserById(idUser)
         
        if (!verifyUser) res.status(404).json({ message: 'User not Found'})
        
        res.status(200).json(verifyUser.lists)
    },

    // GET /users/:idUser/lists/:idList

    // POST /users/:idUser/lists
    saveNewListUser: (req, res) => {
        const { idUser } = req.params
        const { name } = req.body

        const verifyUser = userModel.getUserById(+idUser)
         
        if (!verifyUser) res.status(404).json({ message: 'User not Found'})
        if (!name && name === "") res.status(400).json({ message: 'Name is not empyt' })
        
        const newList = listModel.saveList(name)
        verifyUser.lists.push(newList)
        const listsUser = listModel.showListsUserById(+idUser)
        
        res.status(201).json(listsUser)
    } 

    // UPDATE /users/:idUser/lists/:idList

    // DELETE /users/:idUser/lists/:idList

}