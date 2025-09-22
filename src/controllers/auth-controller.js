const userModel = require("../models/user-model")


module.exports = {
    register: (req, res) => {
        const { name, nickName, password } = req.body

        if (typeof name !== 'string' || typeof nickName !== 'string' || typeof password !== 'string') return res.status(400).json({ message: "Invalid Fields!"})
        
        const userExisting = userModel.getUserByNickName(nickName)
        if (userExisting) return res.status(400).json({ message: "Nickname already in use!"})

        const allUsers = userModel.allUsers()
        const newUser = userModel.save(name, nickName, password)
        allUsers.push(newUser)
        res.status(201).json(newUser)
    },

    login: (req, res) => {
        const { nickName, password } = req.body

        if (typeof nickName !== 'string' || typeof password !== 'string') return res.status(400).json({ message: "Invalid Fields!"})

        

    }

}