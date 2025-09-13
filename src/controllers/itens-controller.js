//Aqui faremos todo controle dos itens de uma lista exibição, adicionar, editar ou excluir, usando os métodos do itens model

const itenModel = require("../models/iten-model")
const listModel = require("../models/list-model")
const userModel = require("../models/user-model")

module.exports = {
    // GET /users/:idUser/lists/:idList/itens
    getItensList: (req, res) => {
        const{ idUser, idList } = req.params

        const itens = itenModel.showItensListUser(+idUser, +idList)

        res.status(200).json(itens)
    },

    // POST /users/:idUser/lists/:idList/itens
    addItenInList: (req, res) => {
        const { idUser, idList } = req.params
        const { name, mark, quantity, price } = req.body

        const newIten = itenModel.createItem(name, mark, quantity, price)
        itenModel.saveItenInList(+idUser, +idList, newIten)

        res.status(201).json(newIten)
    },

    // PUT /users/:idUser/lists/:idList/itens/:idIten
    updateIten: (req, res) => {
        const { idUser, idList, idIten } = req.params
        const { name, mark, quantity, price } = req.body

        
        
        const user = userModel.getUserById(+idUser)
        if (!user) res.status(404).json({ message: 'User not Found!' })
            
        const list = user.lists.find(li => li.id === +idList)
        if (!list) res.status(404).json({ message: 'List not Found!'})
                
        const iten = list.itens.find(it => it.id === +idIten)
        if (!iten) res.status(404).json({ message: 'Iten not Found!'})
                    
        const updateIten = {}
        if (name) updateIten.name = name
        if (mark) updateIten.mark = mark
        if (quantity || quantity === 0) updateIten.quantity = quantity
        if (price || price === 0) updateIten.price = price

        const updatedItens = itenModel.editItem(iten, updateIten)

        res.status(200).json(updatedItens) 
    }
}