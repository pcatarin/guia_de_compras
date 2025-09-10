const express = require('express')
const userController = require('./controllers/user-controller')
const listController = require('./controllers/list-controller')
const itensController = require('./controllers/itens-controller')

const router = express.Router()

//Rotas de Usuário
router.get('/users', userController.viewUsers)
router.post('/users', userController.newUser)
router.get('/users/id',userController.checkUserById)
router.put('/users/:id', userController.editUser)
router.delete('/users/:id', userController.removeUser)

//Rotas de Lista
router.get('/users/:idUser/lists', listController.getListsUser)
router.post('/users/:idUser/lists', listController.saveNewListUser)
router.put('/users/:idUser/lists/:idList',listController.updateList)

//Rotas de Itens
router.get('/users/:idUser/lists/:idList/itens', itensController.getItensList)

module.exports = router