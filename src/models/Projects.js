import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: String,
    description: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
},
    { timestamps: true }
);

const projectModel = mongoose.model('projects', projectSchema)

export default projectModel