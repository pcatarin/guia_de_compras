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

    // Verifica uma lista pelo ID
    showListById: (lists, listID) => {
        const list = lists.find(li => li.id === listID)

        return list
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
    editList: (list, newDates) => {
        const { name, itensQuantity, amountValue, status } = newDates
        

        if (name && typeof name === 'string') list.name = name;

        if (itensQuantity && typeof itensQuantity === 'number') list.itensQuantity = itensQuantity;

        if (amountValue && typeof amountValue === 'number') list.amountValue = amountValue;

        if (status && typeof status === 'string') list.status = status;

        return list
    },

    // Remove uma lista pelo ID
    removeList: (id) => {
        lists = lists.filter(lt => lt.id !== id)
    }

}