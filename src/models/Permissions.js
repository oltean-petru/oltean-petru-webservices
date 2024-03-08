import mongoose from 'mongoose';
const { Schema } = mongoose;

const PermissionSchema = new Schema({
  name: String
});

const permissionsModel = mongoose.model('permissions', PermissionSchema)

export default permissionsModel