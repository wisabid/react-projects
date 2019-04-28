const initialState = {
    users : [],
    messages : []
}

const reducerLogin = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        case 'SHOW_MESSAGE':
            return {...newState, messages : newState.messages.concat([{message : action.data.message, sender : action.data.sender}])}
        case 'SHOW_USERS' : 
            return {...newState, users : action.data.users}
        case 'reset' : 
            return {...newState, messages : []}
        default: 
            return newState;
    }    
}

export default reducerLogin;