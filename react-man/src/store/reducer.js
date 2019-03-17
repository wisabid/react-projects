const initialState = {
    loggedin : false
}

const reducer = (state = initialState, action) => {
    const newState = {...state}
    if (action.type === 'login') {
        newState.loggedin = true;
    }
    return newState;
}

export default reducer;