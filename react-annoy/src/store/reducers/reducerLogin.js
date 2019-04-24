const initialState = {
    pass : false,
    loggedin : false,
    focus : '',
}

const reducerLogin = (state = initialState, action) => {
    const newState = {...state}
    if (action.type === 'showpassfield') {
        newState.loading = false;
        newState.pass = true;
        newState.focus = action.id;
    }
    else if(action.type === 'cancel') {
        newState.pass = false;
    }
    else if (action.type === 'logout') {
        newState.pass = false;
        newState.loggedin = false;
    }
    else if (action.type === 'login') {
        newState.pass = true;
        newState.loggedin = true;
    }

    if (action.type === 'focus') {
        newState.focus = action.id;
    }
    else if (action.type === 'blurme') {
        newState.focus = '';
    }

    if (action.type === 'loading') {
        newState.loading = true;
    }
    return newState;
}

export default reducerLogin;