import User from "../models/User.js"
import bcrypt from "bcryptjs"

const exposeServices = {

  findOneUserByEmail: async ({ email }) => {
    try {
      const findUser = await User.findOne({ email })
      return findUser
    } catch (error) {
      throw error
    }
  },

  findOneUserById: async ({ id }) => {
    try {
      const findUser = await User.findOne({ _id: id })
      return findUser
    } catch (error) {
      throw error
    }
  },

  findAllUsers: async () => {
    try {
      const allUsers = await User.find()
      return allUsers
    } catch (error) {
      throw error
    }
  },

  createUser: async (rawData) => {
    const { password } = rawData
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(password, salt);

    const newUserData = {
      ...rawData,
      password: hash
    }

    try {
      const toSave = new User(newUserData)
      const newUser = toSave.save()
      return newUser
    } catch (error) {
      throw error
    }
  },
}

export default exposeServices