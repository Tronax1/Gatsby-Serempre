import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/types'

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
        case UPDATE_TODO:{
            const updatedArray = state.slice()
            updatedArray[action.payload.id] = action.payload.data
            return updatedArray
        }
        default:
            return state;
    }
}