// import WebSocket from 'ws';
var WebSocket = require('ws')

const wss = new WebSocket.Server({ port : 8989 });
console.log('welcome')
let users = [];

const broadcast = (data, ws) => {
    // console.log('CLIENTS', wss.clients)
    // console.log('going to broadcast!!', wss.clients)
    wss.clients.forEach(client => {
        console.log('Inside each client', client.readyState)
        if (client.readyState === WebSocket.OPEN && client !== wss) {
            console.log('sending back to client your data : ',data)
            client.send(JSON.stringify(data))
        }
    })
}

wss.on('connection', ws => {
    console.log('COnnected!!! and listening on...')
    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log('YOU HAVE A MESSAGE ', message);
        console.log('MESSAGE TYPE ', data.type);
        switch (data.type) {
            case 'NEW_USER' :
                index = users.length;
                let chkname = users.find(item => item.name.toLowerCase() === data.user.toLowerCase())   
                if (!chkname)  {    
                    users.push({ name : data.user, id : index +1});
                    console.log(users)
                    ws.send(JSON.stringify({
                        type : 'USERS_LIST',
                        users
                    }))
                    
                }
                broadcast({
                    type : 'USERS_LIST',
                    users
                }, ws)
                break;
            case 'USER_EXIT':
                users = users.filter(item => item.name !== data.user);
                broadcast({
                    type : 'USERS_LIST',
                    users
                }, ws)
                break;
            case 'NEW_MESSAGE' : 
                broadcast({
                    type : 'NEW_MESSAGE',
                    message : data.data.message,
                    sender : data.data.sender
                }, ws);
                break;
            case 'ANNOY' : 
                broadcast({
                    type : 'ANNOY',
                    msg : data.msg
                }, ws);
                break;
            case 'TYPING':
                 broadcast({
                    type : 'TYPING',
                    user: data.user
                }, ws);
                break;
            default : 
                break;
        }
    })

    ws.on('close', () => {
        users.splice(index, 1);
        broadcast({
            type : 'USERS_LIST',
            users
        }, ws);
    })
})