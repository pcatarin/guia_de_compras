// Os itens terão o seguinte formato:

const userModel = require("./user-model")
const listModel = require("./list-model")

// { id, nameIten, quantityIten, valueIten, amountValue }
let itens = []

module.exports = {
    showItensListUser: (userId, listId) => {
        const user = userModel.getUserById(userId)
        const list = user.lists.findIndex(li => li.id === listId)

        return user.lists[list].itens
    },

    saveItem: () => {

    },

    editItem: () => {

    },

    removeItem: () => {
        
    }
}