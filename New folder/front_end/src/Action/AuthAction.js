import * as AuthApi from '../API/AuthRequest.js'


export const login = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.login(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err);
        dispatch({ type: "AUTH_FAIL" })
    }

}
export const signUp = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.signUp(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (err) {
        console.log(err);
        dispatch({ type: "AUTH_FAIL" })
    }

}