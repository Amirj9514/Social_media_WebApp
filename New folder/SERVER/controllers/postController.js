import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from 'mongoose'

export const createNewPost = async (req, res) => {

    const newPost = new PostModel(req.body);
    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getPost = async (req, res) => {
    const currentUserId = req.params.id

    try {
        const findPost = await PostModel.find({ userId: currentUserId })
        res.status(200).json({ success: true, result: findPost })
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { userId } = req.body
    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json({ success: true, message: "Post Updated Successfully :)" })
        }
        else {
            res.status(403).json({ success: false, message: "Action Forbidden" })
        }
    } catch (err) {
        res.status(500).json(error)
    }
}

export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body

    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.deleteOne()
            res.status(200).json({ success: true, message: "Post Deleted Successfully :) " })
        }
        else {
            res.status(403).json({ success: false, message: "Action Forbidden" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}


export const likePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(postId)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            console.log("DONE");
            res.status(200).json({ success: true, messsage: "post liked" })
        }
        else {
            console.log("Not Done");
            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json({ success: true, messsage: "post dislike" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: ":(" })
    }
}



export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id
    try {
        const currentUserPost = await PostModel.find({ userId: userId })
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0
                }
            }
        ])
        res.status(200).json(
            currentUserPost.concat(...followingPosts[0].followingPosts).sort((a, b) => {
                return b.createdAt - a.createdAt
            })
        )
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}