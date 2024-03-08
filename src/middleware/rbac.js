import UsersS from '../services/users'

const exposeMiddleware = {
    authorizationChecker:async (req,res,next)=>{
        const {userId,method,baseUrl} = req
        const thisU = await UsersS.findOneUserByIdWithRoles({id:userId})
        const {authorizations} = thisU.roles[0]
        const ressourcePath = baseUrl.split('/')[3]
        const findRessource = authorizations.find(({ressource})=>ressource==ressourcePath)
        const isAllowed = findRessource.permissions.includes(method)

        if(isAllowed){
          return next()
        }
        return res.sendStatus(403)
    }
}

export default exposeMiddleware