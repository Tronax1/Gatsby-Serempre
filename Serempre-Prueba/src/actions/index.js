import {ADD_TODO, DELETE_TODO} from './types'

export const addTodo = (TODO) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: TODO
    })
}
export const deleteTodo = id => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: id
    })
}