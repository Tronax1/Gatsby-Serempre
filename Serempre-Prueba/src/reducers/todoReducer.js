export default (state = null, action) => {
    switch (action.type) {
        case 'testing':
            return action.payload
        default:
            return state;
    }
}