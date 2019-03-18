const initialState = {
    pass : false,
    loggedin : false,
    focus : '',
    loading : false
}

const reducerLogin = (state = initialState, action) => {
    const newState = {...state}
    if (action.type === 'showpass') {
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
    else if (action.type === 'blur') {
        newState.focus = '';
    }

    if (action.type === 'loading') {
        newState.loading = true;
    }
    return newState;
}

export default reducerLogin;