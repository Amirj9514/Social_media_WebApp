import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String
    },
    coverPic: {
        type: String,
    },
    about: {
        type: String,
    },
    livein: {
        type: String,
    },
    workAt: {
        type: String,
    },
    relationship: {
        type: String,
    },
    followers: [],
    following: [],
},
    { timestamps: true }
)

const UserModel = mongoose.model('Users', userSchema)


export default UserModel