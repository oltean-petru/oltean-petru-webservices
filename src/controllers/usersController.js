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
  },

  updateUser: async (req, res) => {
    const { body } = req
    try {
      const updatedUser = await usersService.updateUser(body)
      return res.json(updatedUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  },

  patchUser: async (req, res) => {
    const { body } = req
    try {
      const updatedUser = await usersService.patchUser(body)
      return res.json(updatedUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  },
}

export default exposeController