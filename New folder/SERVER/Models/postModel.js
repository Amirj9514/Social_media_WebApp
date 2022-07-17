import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    likes: [],
    image: {
        type: String
    }

},
    {
        timestamps: true
    }
)

const PostModel = mongoose.model('posts', postSchema)

export default PostModel