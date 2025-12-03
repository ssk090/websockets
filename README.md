# WebSockets
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
- Live Feeds: Financial trackers, news feeds, and social media updates are examples where ws can be used to push live data to users.
- Interactive Services: Collaborative editing tools, live customer support chat, and interactive webinars can use ws to enhance user interaction.





## research
- TCP/ UDP Layer, OSI Modeel
- why websockets are used instead of polling/long polling ?
- 
