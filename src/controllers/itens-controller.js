//Aqui faremos todo controle dos itens de uma lista exibição, adicionar, editar ou excluir, usando os métodos do itens model

const itenModel = require("../models/iten-model")

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
    }
}