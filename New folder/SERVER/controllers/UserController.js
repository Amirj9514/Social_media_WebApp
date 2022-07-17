import UserModel from "../Models/userModel.js";


// get a user 

export const getUser = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        const checkUser = await UserModel.findById(id)
        if (!checkUser) {
            res.status(404).json({ success: false, message: 'User Not found Please Login Agine' })
        }
        else {
            const { password, ...otherDetails } = checkUser._doc

            res.status(200).json({ success: true, message: otherDetails })
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req, res) => {
    const currentUserId = req.params.id;
    const { id, password, adminStatus } = req.body;
    if (id === currentUserId || adminStatus) {
        try {
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json({ success: true, message: "User Update successfully :) ", result: user })
        } catch (err) {
            console.log(err);
        }
    }
    else {
        res.status(403).json({ success: false, message: 'Unkown Error ! Please Signin Again' })
    }
}


export const deleteUser = async (req, res) => {
    const currentUserId = req.params.id
    const { id, adminStatus } = req.body;
    if (id === currentUserId || adminStatus) {
        try {
            await UserModel.findByIdAndDelete(currentUserId)
            res.status(200).json({ success: true, message: "User Delete Successfully :) " })
        } catch (error) {
            console.log(error);
        }
    }
    else {
        res.status(403).json({ success: false, message: 'Unkown Error ! Please Signin Again' })
    }
}


export const followUser = async (req, res) => {
    const currentUserId = req.params.id
    const { id } = req.body

    if (currentUserId === id) {
        res.status(403).json({ success: "false", message: "Action forbidden :( " })
    }
    else {
        try {

            const followUser = await UserModel.findById(currentUserId);
            const followingUser = await UserModel.findById(id);

            if (!followUser.followers.includes(id)) {
                console.log("good");
                await followUser.updateOne({ $push: { followers: id } })
                await followingUser.updateOne({ $push: { following: currentUserId } })
                res.status(200).json({ success: true, message: "Follow user Successfully :) " })
            }
            else {
                res.status(403).json({ success: false, message: "oop! You Alreay Follow this user" })
            }

        } catch (error) {
            res.status(500).json({ success: false, message: "Error ☹" })
        }
    }
}


export const unFollowUser = async (req, res) => {
    const currentUserId = req.params.id
    const { id } = req.body

    if (currentUserId === id) {
        res.status(403).json({ success: "false", message: "Action forbidden :( " })
    }
    else {
        try {

            const followUser = await UserModel.findById(currentUserId);
            const followingUser = await UserModel.findById(id);

            if (followUser.followers.includes(id)) {
                await followUser.updateOne({ $pull: { followers: id } })
                await followingUser.updateOne({ $pull: { following: currentUserId } })
                res.status(200).json({ success: true, message: "UnFollow user Successfully :) " })
            }
            else {
                res.status(403).json({ success: false, message: "oop! User Not found" })
            }

        } catch (error) {
            res.status(500).json({ success: false, message: "Error ☹" })
        }
    }
}