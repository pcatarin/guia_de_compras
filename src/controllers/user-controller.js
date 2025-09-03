const { req, res } = require('express')
const userModel = require('../models/user-model')

module.exports = {
    // GET /users
    viewUsers: (req, res) => {
        const users = userModel.allUsers()
        res.status(200).json({ users })
    },

    // GET /users/id
    checkUserById: (req, res) => {
        const { id } = req.body

        const user = userModel.getUserById(id)

        if(!user) {
            res.status(404).json({ message: 'User not found'})
        }

        res.status(200).json(user)
    },

    // POST /users
    newUser: (req, res) => {
        const { name , nickName } = req.body
        if (typeof name !== 'string' || !name || name === '') return res.status(400).json({ message: 'Precisa de um Nome...'})
        
        if (typeof nickName !== 'string' || !nickName || nickName === '') return res.status(400).json({ message: 'Precisa de um Nickname...'})
       
        userModel.save(name,nickName)

        res.status(201).json({ message: 'Create'})
    },

    // PUT /users/:id
    editUser: (req, res) => {
        const { id } = req.params
        const { name, nickName } = req.body
        const dadosAtualizados = { name, nickName }

        let findUser = userModel.getUserById(+id)

        if(!findUser) {
            res.status(404).json({ message: 'User not found' })
        }

        findUser = userModel.updateUser(+id, dadosAtualizados)

        
        
        res.status(201).json(findUser) 

    },

    // DELETE /users/:id
    removeUser: (req, res) => {
        const { id } = req.params

        const userExisting = userModel.getUserById(+id)
        if (!userExisting) {
            return res.status(404).json({ message: 'User not found!' })
        }
        userModel.deleteUser(+id)
        res.status(200).json(userExisting)
    }
}