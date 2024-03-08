import authService from '../services/authService.js'
import usersService from '../services/usersService.js'
import { signJwt, verifyJwt } from '../utils/jwt.js'

const exposeController = {

  login: async (req, res) => {
    const { body } = req
    const user = await usersService.findOneUserByEmail(body)

    if (!user) return res.sendStatus(401)
    const comparePwd = await authService.comparePassword({ password: body.password, storedPassword: user.password })
    const tokenPayload = {
      id: user._id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email
    }
    if (comparePwd) {
      const token = signJwt({ payload: tokenPayload, expiresIn: '1d' })
      const refreshToken = signJwt({ payload: tokenPayload, expiresIn: '7d' })
      const accessToken = { access_token: token, token_type: 'Bearer' }
      await usersService.updateUserToken({userId:user._id,refreshToken})
      return res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).json(accessToken)
    }
    return res.sendStatus(401)
  },

  refreshToken: async (req, res) => {
    const { cookies } = req
    if (!cookies?.refreshToken) return res.sendStatus(401)
    const refreshToken = cookies.refreshToken
    res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })

    const foundUser = await usersService.findUserByRefreshToken({ refreshToken })
    if (!foundUser) return res.sendStatus(403)
    try {
      const decoded = verifyJwt(refreshToken)
      const tokenPayload = {
        id: user._id,
        lastName: foundUser.lastName,
        firstName: foundUser.firstName,
        email: foundUser.email

      }
      if (decoded.email !== foundUser.email) return res.sendStatus(403)
      const accessToken = signJwt({ payload: tokenPayload, expiresIn: '1d' })
      return res.json({ accessToken, token_type: 'Bearer' })
    } catch (error) {
      console.log(error)
      return res.sendStatus(401);
    }
  }
}

export default exposeController