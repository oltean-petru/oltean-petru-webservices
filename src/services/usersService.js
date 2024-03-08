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

  findUserByRefreshToken: async ({ refreshToken }) => {
    try {
      const findUser = await User.findOne({ refreshToken })
      return findUser
    } catch (error) {
      throw error
    }
  },

  findUserByIdWithRoles: async ({ id }) => {
    const uid = { _id: id }
    const filter = { roles: 1 }
    const embed = {
      populate: { path: 'roles', select: 'authorizations' }
    }
    try {
      const findUser = await User.findOne(uid, filter, embed)
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

  updateUser: async ({ id, body }) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        body,
        { new: true }
      )
      return updatedUser
    } catch (error) {
      throw new Error(error)
    }
  },

  patchUser: async ({ id, body }) => {
    try {
      const { skills, roles, ...restOfBody } = body;
      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: restOfBody,
          ...(skills && { $addToSet: { skills: { $each: skills } } }),
          ...(roles && { $addToSet: { roles: { $each: roles } } }),
        },
        { new: true }
      )
      return updatedUser
    } catch (error) {
      throw error
    }
  },

  updateUserToken: async ({ userId, refreshToken }) => {
    const query = {
      _id: userId
    }
    const updateQ = {
      $set: {
        refreshToken
      }
    }
    try {
      const toUpdate = await User.findOneAndUpdate(query, updateQ, { new: true })
      return toUpdate
    } catch (error) {
      throw error
    }
  },

  deleteUser: async (id) => {
    try {
      const deletedUser = await User.findByIdAndDelete(id)
      return deletedUser
    } catch (error) {
      throw error
    }
  }
}

export default exposeServices