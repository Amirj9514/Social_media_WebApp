import * as PostApi from '../API/postRequest'


export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })
    try {
        const { data } = await PostApi.getTimelinePosts(id)
        dispatch({ type: "RETREIVING_SUCCESSFULL", data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETREIVING_FAIL" })
    }
}