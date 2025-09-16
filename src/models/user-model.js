// Os users não podem ter acesso a outros usuários, e somente ter acesso ao seu próprio perfil

let users = [
    {
        id: 1,
        name: 'Paulo Catarin',
        nickName: 'pcatarin',
        password: '123456',
        lists: [
            {
                id: 1,
                name: 'junho',
                itens: [
                   { 
                        id: 1, 
                        name: 'arroz', 
                        mark: 'tarumã',
                        quantity: 2, 
                        price: 10.00, 
                        get totalPrice () {
                           return this.quantity * this.price
                        } 
                    }
                ], 
                get itensQuantity () {
                    return this.itens.reduce((sum, iten) => sum + iten.quantity, 0)
                }, 
                get amountValue() {
                    return this.itens.reduce((sum, item) => sum + item.totalPrice, 0)
                }, 
                status: 'pendent'
            }
        ]
    }
]


module.exports = {  
    // Mostra todos os usuários
    allUsers: () =>  users,

    // Cria Novo Usuário
    save: (name, nickName, password, lists = []) => {
        
        const newUser = {
            id: Math.floor(Math.random()*9999),
            name,
            nickName,
            password,
            lists: lists
        }

        users.push(newUser)
    },

    // Obtem Usuário pelo ID
    getUserById: (id) => {
        const userId = users.find(user => user.id === id)

        return userId
    },

    // Atualiza Usuário
    updateUser: (id, userAtualizado) => {
        const user = users.find(iten => iten.id === id)
        const { name, nickName } = userAtualizado

        if (name) user.name = name
        if (nickName) user.nickName = nickName
        
        return user
    },

    // Deleta usuário pelo ID
    deleteUser: (id) => {
        /* Usando Splice
        const userId = users.findIndex(iten => iten.id === id)
        console.log(userId)

        const useDelete = users.splice(userId, 1)
        return useDelete[0]
        */
       // Usando Filter
       return users =  users.filter(iten => iten.id !== id)
    }
}