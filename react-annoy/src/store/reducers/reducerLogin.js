const initialState = {
    users : [],
    messages : [],
    annoys : [],
    typingusers : []
}

const reducerLogin = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        case 'SHOW_MESSAGE':
        debugger;
            newState.typingusers.splice(newState.typingusers.indexOf(action.data.sender), 1)
            console.log('NEW', newState.typingusers)
            return {...newState, messages : newState.messages.concat([{message : action.data.message, sender : action.data.sender}]), typingusers : []}
        case 'SHOW_USERS' : 
            return {...newState, users : action.data.users}
        case 'reset' : 
            return {...newState, messages : []}
        case 'ANNOY_HEM':
            return {...newState, annoys: newState.annoys.concat([action.data.msg])}
        case 'TYPING_MSG':
        debugger;
            let finduser = newState.typingusers.indexOf(action.data.user);
            return (finduser === -1)? {...newState, typingusers : newState.typingusers.concat([action.data.user])}:{...newState}
        default: 
            return newState;
    }    
}

export default reducerLogin;