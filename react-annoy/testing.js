var WebSocket = require('ws')
const ws = new WebSocket("ws://localhost:8989");

ws.addEventListener("message", e => {
    console.log(e.data);
    

}); // logs all data to console


ws.addEventListener("open", e => {
    // Subscribe to all updates for an event, by default previous subscriptions are discarded
    // ws.send(JSON.stringify({type: "subscribe", keys: ["e.21249934"]}));


    // Subscribe to a specific outcome's updates - this is the most specific subscription
    // ws.send(JSON.stringify({type: "subscribe", keys: ["o.367533685"]}));


    // Fetch event data
    //ws.send(JSON.stringify({ type: "getEvent", id: 21249939 }));


    // Fetch live events
    //ws.send(JSON.stringify({ type: "getLiveEvents" }));

    // Fetch live events
    console.log('Sending...')
    ws.send(JSON.stringify({ type: "NEW_MESSAGE", data : {message : 'Helloo Alfie', sender : 'Alfie'} }));
});




/*ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};
ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};
ws.onclose = function(evt) {
  console.log("Connection closed.");
}; */

ws.onerror = function(err) {
    console.log("Connection error.", err);
  }; 