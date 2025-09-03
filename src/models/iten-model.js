// Os itens terão o seguinte formato:

const userModel = require("./user-model")

// { id, nameIten, quantityIten, valueIten, amountValue }
let itens = []

module.exports = {
    showItensListUser: (id) => {
        const user = userModel.getUserById(id)
        return user.lists.itens
    },

    saveItem: () => {

    },

    editItem: () => {

    },

    removeItem: () => {
        
    }
}