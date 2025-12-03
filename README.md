# websockets
- websockets provide a way to establish a persistent, full-duplex communication channel over a single TPC connection between the client and the server.

-- persistent: there is no need to establish a connection again and again, it stays connected unless closed explicitly 
for example, i can send `ws.send("send me 10 dollar")` again and again once connected to the websocket server
