import usersService from '../services/usersService.js'

const exposeController = {

  allUsers: async (req, res) => {
    const allUsers = await usersService.findAllUsers()
    return res.json(allUsers)
  },

  createUser: async (req, res) => {
    const { body } = req
    try {
      const registeredUser = await usersService.createUser(body)
      return res.json(registeredUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

export default exposeController