
const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989');
    socket.onopen = () => {
        console.log('Connection is open my boy!', socket);
    }
    socket.onmessage = (event) => {      
        debugger; 
        console.log('YOU HAVE A MESSAGE MY BOY ');        
        let data = JSON.parse(event.data);
        console.table('MESSAGE_RECEIVED', data);
        switch(data.type) {
            case 'USERS_LIST':
                dispatch({type : 'SHOW_USERS', data: data})
                break;
            case 'NEW_MESSAGE':
                dispatch({type: 'SHOW_MESSAGE', data : data})
                break;
            case 'ANNOY':
                dispatch({type: 'ANNOY_HEM', data: data})
            case 'TYPING':
                dispatch({type: 'TYPING_MSG', data: data})
            default :
        }
    }

    socket.onclose = () => {
        console.log('Connection is C L O S E D my boy!')
    }

    socket.onerror = (err) => {
        console.log('E R R O R !!!')
        console.error(err)
    }

    socket.waitForConnection= function(sendAction) {
        let timeout;
        if (this.readyState === 1) {
            console.log('Connecting nOWWW ....')
            clearTimeout(timeout)
            sendAction();
        }
        else {
            timeout = setTimeout(() => {
                console.log('Checking Again ....')
                this.waitForConnection(sendAction)
            }, 1000);
        }
    }
    return socket;
}

export default setupSocket;