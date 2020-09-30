import {ADD_TODO, DELETE_TODO} from '../actions/types'

const initialState = [

]
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:{
            const newArr = state.slice()
            newArr.splice(action.payload, 1)
            return newArr
        }
        default:
            return state;
    }
}