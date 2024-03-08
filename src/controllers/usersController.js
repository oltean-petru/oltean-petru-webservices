import usersService from '../services/usersService.js'
import QueryBuilder from "../utils/querryBuilder.js";
import User from "../models/User.js";

const exposeController = {

  allUsers: async (req, res) => {
    const builder = new QueryBuilder(User);
    if (req.query.sortBy) {
      builder.sortByField(req.query.sortBy);
    }
    if (req.query.fields) {
      builder.limitFields(req.query.fields);
    }
    if (req.query.page && req.query.limit) {
      builder.paginate(req.query.page, req.query.limit);
    }
    const allUsers = await builder.execute();
    return res.json(allUsers);
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
    const { id } = req.params
    try {
      const updatedUser = await usersService.updateUser({ id, body })
      return res.json(updatedUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  },

  patchUser: async (req, res) => {
    const { body } = req
    const { id } = req.params
    try {
      const updatedUser = await usersService.patchUser({ id, body })
      return res.json(updatedUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params
    try {
      const deletedUser = await usersService.deleteUser(id)
      return res.json(deletedUser)
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

export default exposeController