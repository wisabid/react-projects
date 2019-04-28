const initialState = {
    messages : []
}

const reducerLogin = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        case 'SHOW_MESSAGE':
            return {...newState, messages : newState.messages.concat([{message : action.data.message, sender : action.data.sender}])}
        default: 
            return newState;
    }    
}

export default reducerLogin;