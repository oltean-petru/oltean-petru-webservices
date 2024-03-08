import mongoose from 'mongoose';
const { Schema } = mongoose;


const roleSchema = new Schema({
    name:String,
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
});

const roleModel = mongoose.model('roles',roleSchema)

export default roleModel