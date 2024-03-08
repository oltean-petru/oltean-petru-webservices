import Roles from '../models/Roles.js'
import Permission from '../models/Permissions.js'

const exposeServices = {
  addNewRoles: async (rawData) => {
    try {
      const newRoles = new Roles(rawData)
      const addRole = await newRoles.save()
      return addRole
    } catch (error) {
      throw error
    }
  },

  getPermissionsByRoleName: async (roleName) => {
    try {
      const role = await Roles.findOne({ name: roleName }).populate('permissions')
      if (!role) {
        throw new Error('Role not found')
      }
      const permissions = role.permissions.map(permission => permission.name)
      return permissions
    } catch (error) {
      throw error
    }
  },

  // This function is used to create default roles and permissions
  createRoles: () => {
    const adminRole = new Roles({ name: 'admin' });
    const userRole = new Roles({ name: 'user' });

    const createPermission = new Permission({ name: 'create' });
    const readPermission = new Permission({ name: 'read' });
    const updatePermission = new Permission({ name: 'update' });
    const deletePermission = new Permission({ name: 'delete' });


    adminRole.permissions.push(createPermission, readPermission, updatePermission, deletePermission);
    userRole.permissions.push(readPermission, updatePermission);

    createPermission.save();
    readPermission.save();
    updatePermission.save();
    deletePermission.save();
    userRole.save();
    adminRole.save();
  }
}

export default exposeServices