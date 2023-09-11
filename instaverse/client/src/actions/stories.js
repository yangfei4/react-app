import * as api from "../api";

// redux thunk: create services that return function instead of action
// comes in handy when making async API request
export const getStories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch( {type: "FETCH_ALL", payload: data} );
    } catch (error) {
        console.log(error.message);
    }
}

export const createStory = (story) => async (dispatch) => {
    try {
        const { data } = await api.createStory(story); //api request to back-end server(post)
        dispatch({ type: "CREATE_STORY", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

// const getStories = () => {
//     const action = {
//         type: "FETCH_ALL",
//         payload : []
//     }
//     return action;
// };