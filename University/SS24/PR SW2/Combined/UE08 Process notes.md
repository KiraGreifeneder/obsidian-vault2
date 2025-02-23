[Übung08.pdf](file:///C:%5CUsers%5Ckirag%5COneDrive%5CJKU%5CSS24%5CPR%20SW2%5Cangaben%5CÜbung08.pdf)
## Specification
### Proto-file specs
- Use Proto3 syntax
- Generated files should be in ue8.protoOut
- There should be a Data type of the name PositionInfo stat stores a name and x,y data
- Use own or empty data types and name them.
### Service with two remote procedure calls
- One should make it possible to continuously send position data to the server (server only sends confirmations back). 
- The other one should make it possible to continuously receive position data from the server.
	- This should be a bidirectional RPC
	- Should be able to send multiple requests to the server.
	- A request contains information about whether or not the client wants to receive position data or not
- When the server receives a request, where the client wants position data, then it will be added to the list of receiving clients
- If it receives a request where the client no longer wants requests, the client is removed from the list of receiving clients
Do a "Maven install" to generate Java code from the proto file. do "maven clean" first.
## Server
Create a class for the server-side implementation of the RPC services in ue8.server
- Override and implement the necessary methods
- non-static threadsafe data structure for storing clients
Implement a main class for the server and implement the main method in it
- don't need to worry about closing the server, it should theoretically run indefinitely
- make sure that the server doesn't close itself on start
## Sending clients
- Complete the methods in PositionSendingClient
	- Store the connection to the server in a field in the class
- Make sure the connection to the server is only closed when it is done so in a controlled manner
- Error handling: Possible connection loss, the client may be terminated with an IOException. Throw it, if necessary.
## Receiving clients
PositionReceivingClient contains the main method of the receiving client. 
- complete the main method so that the client registers itself as receiving client on the server.
- Upon closure of the window, it should de-register itself