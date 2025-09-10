//Aqui faremos todo controle dos itens de uma lista exibição, adicionar, editar ou excluir, usando os métodos do itens model

const itenModel = require("../models/iten-model")

module.exports = {
    // GET /users/:idUser/lists/:idList/itens
    getItensList: (req, res) => {
        const{ idUser, idList } = req.params

        const itens = itenModel.showItensListUser(+idUser, +idList)

        res.status(200).json(itens)
    }
}