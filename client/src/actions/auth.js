import * as api from '../api/index.js'


export const signin = (formData, navigate) => async (dispatch) => {

    try {
        /// login in the iser 
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {

    try {
        /// signup in the iser 
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}