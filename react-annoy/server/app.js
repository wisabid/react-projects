// import WebSocket from 'ws';
var WebSocket = require('ws')

const wss = new WebSocket.Server({ port : 8989 });

const users = [];

const broadcast = (data, ws) => {
    console.log('CLIENTS', wss.clients)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
}

wss.on('connection', ws => {
    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log('YOU HAVE A MESSAGE ', message);
        switch (data.type) {
            case 'NEW_USER' :
                index = users.length;
                users.push({ name : data.name, id : index +1});
                ws.send(JSON.stringify({
                    type : 'USERS_LIST',
                    users
                }))
                broadcast({
                    type : 'USERS_LIST',
                    users
                }, ws)
                break;
            case 'NEW_MESSAGE' : 
                broadcast({
                    type : 'NEW_MESSAGE',
                    message : data.message,
                    sender : data.sender
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