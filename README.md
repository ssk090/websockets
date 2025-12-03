# WebSockets [link](https://petal-estimate-4e9.notion.site/WebSockets-1477dfd10735802982becc925074b5f0)
- websockets provide a way to establish a persistent, full-duplex communication channel over a single TPC connection between the client and the server.

1.  persistent: there is no need to establish a connection again and again, it stays connected unless closed explicitly 
    - for example, i can send `ws.send("send me 10 dollar")` again and again once connected to the websocket server

2. full-duplex: means two way communication.
    - client and server can send multiple requests.
  
3. TCP: Transmission Control Protocol
     - OSI Model one of the layers
     - TCP and UDP are two different protocols
     - websockets servers are under the hood creating a TCP connection between a client and server
  
## use cases
- Real-time applications: chat applications, live sports updates, real time gaming, and any application requiring instant updates can benefit from ws.
- Live Feeds: Financial tickers, news feeds, and social media updates are examples where ws can be used to push live data to users.
- Interactive Services: Collaborative editing tools, live customer support chat, and interactive webinars can use ws to enhance user interaction.

## Why not use HTTP/REST? Why do you need ws?
<img width="712" height="322" alt="image" src="https://github.com/user-attachments/assets/e768de25-c93c-421d-b909-03f77c39f0c4" />

1. Network Handshake happens for every request
2. No way to push server side events (You can use polling but not the best approach)

- Leetcode uses polling when you submit a problem
<img width="638" height="449" alt="image" src="https://github.com/user-attachments/assets/31c03143-9726-4b2d-b0af-1d0bc5dcb4f0" />





## research
- TCP/ UDP Layer, OSI Modeel
- why websockets are used instead of polling/long polling ?
- 
