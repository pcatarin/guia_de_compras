// As listas serão compostas de:

const userModel = require("./user-model")

// { id, name, itensQuantity, amountValue, status }
let lists = []
let users = userModel.allUsers()

module.exports = {
    // Exibe todas as listas de um usuário
    showListsUserById: (id) => {
        const user = userModel.getUserById(id)
        return user.lists
    },

    // Cria uma nova lista
    saveList: (name) => {
       
        const newList = {
            id: Math.floor(Math.random()*999999),
            name,
            itens: [],
            get itensQuantity () {
                return this.itens.length
            }, 
            get amountValue() {
                return this.itens.reduce((sum, item) => sum + item.amountValueItens, 0)
            },
            status: 'pendent'
        }
        return newList
        
    },

    // Edita uma lista pelo ID
    editList: (id, newDates) => {
        const { name, itensQuantity, amountValue, status } = newDates
        const existingList = lists.find(list => list.id === id)

        if (name && typeof name === 'string') existingList.name = name;

        if (itensQuantity && typeof itensQuantity === 'number') existingList.itensQuantity = itensQuantity;

        if (amountValue && typeof amountValue === 'number') existingList.amountValue = amountValue;

        if (status && typeof status === 'string') existingList.status = status;

        return existingList
    },

    // Remove uma lista pelo ID
    removeList: (id) => {
        lists = lists.filter(lt => lt.id !== id)
    }

}