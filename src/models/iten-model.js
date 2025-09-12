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

    createItem: (name, mark, quantity, price) => {
        const newIten = {
            id: Math.floor(Math.random()*9999), 
            name,
            mark,
            quantity,
            price,
            get totalPrice () {
                return this.quantity * this.price
            }
        }

        return newIten

    },

    saveItenInList (idUser, idList, iten) {
        const user = userModel.getUserById(idUser)
        const list = user.lists.findIndex(li => li.id ===idList)

        user.lists[list].itens.push(iten)
        return iten
    },

    editItem: () => {

    },

    removeItem: () => {
        
    }
}