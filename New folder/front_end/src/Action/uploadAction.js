import * as uploadApi from '../API/uploadRequest.js'


export const uploadImage = (data) => async (dispatch) => {
    try {
        await uploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" })
    try {
        const newPost = await uploadApi.uploadPost(data)
        console.log(newPost);
        dispatch({ type: "UPLOAD_SUCCESSFULL", data: newPost.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" })
    }
}