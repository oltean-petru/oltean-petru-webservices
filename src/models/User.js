import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    lastName: String,
    firstName: String,
    email: { type: String, required: 'email is required', unique:true },
    skills: [{ type: Schema.Types.ObjectId, ref: 'skills' }],
    password: { type: String, required: 'password is required' },
    refreshToken:String,
},
    { timestamps: true }
);

const userModel = mongoose.model('users', userSchema)

export default userModel