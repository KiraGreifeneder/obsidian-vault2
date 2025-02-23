## Variant-Independent
---
- Communication through JSON (Record Msg and enum Cmd)

**Communication process:**
- Client connects to server
- Server sends `ID` command with a unique id back to the client
- Clients send a `MOVE` command every time the position changes, along with its new position and client id
- Server sends POS command to all clients, containing the id of the moved client, and the position. This should happen <span style="color:#66df5d">asynchronously in a thread-pool</span>.
- To disconnect/end a client, the `END` command is sent to the server
- The server then sends a `TERM` command to all connected clients (`InteractiveEntityClient` then deletes them). These broadcasts should also happen <span style="color:#66df5d">asynchronously</span>.

**Additional info**:
- `Socket`/`SocketChannel` need to be closed when clients are ended.
- Asynchronous execution of broadcasts can lead to conflicts. The sending of broadcasts to the clients must happen under mutual exclusion.
- Always check if `Socket`/`SocketChannel` is still open before trying to send.

## ServerSocket, Sockets variant.
---
- There is a thread with a loop for the connection to clients (`ServerSocket::accept`). 
- The interaction with a client is done in its own `ClientHandler`, which is run in its own thread.
	- Messages from the client are read here
	- Reading should be blocking
- Broadcasts to the clients (`MOVE` and `TERM`) aren't done in the client threads, but in a thread pool

**Personal notes:**

## Channels, Selector variant
---
- Non-blocking, using `ServerChannel`, `SocketChannel` and `Selector`.
- There is one thread for the reaction to events (Execution of `Selector::select`).
	- Responsible for connecting to clients
	- Responsible for reading messages from clients
- Broadcasts are again handled by entering them in a thread pool
- Instead of `ClientHandler`, use objects that store all information about clients. Use `ClientInfo` for this.

**Personal notes:**

Example of correct output:
![[_attachments/Pasted image 20240517193344.png]]
