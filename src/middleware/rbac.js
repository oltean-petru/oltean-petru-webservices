import UsersService from '../services/usersService.js'

const exposeMiddleware = {
  authorizationChecker: async (req, res, next) => {
    const { userId, method, baseUrl } = req;
    const usr = await UsersService.findUserByIdWithRoles({ id: userId });

    if (!usr || !usr.roles || !usr.roles[0]) {
      console.error('User or roles not found');
      return res.sendStatus(403);
    }

    const { permissions } = usr.roles[0];

    if (!permissions) {
      console.error('permissions not found');
      return res.sendStatus(403);
    }

    const resourcePath = baseUrl.split('/')[3];
    console.log("resourcePath:", resourcePath);
    const findResource = permissions.find(({ resource }) => resource == resourcePath);
    const isAllowed = findResource && findResource.permissions.includes(method);

    console.log(`control of ${resourcePath} in ${method}`, findResource);
    if (isAllowed) {
      return next();
    }
    return res.sendStatus(403);
  }
}

export default exposeMiddleware;