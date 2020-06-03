# EMP

## What is EMP
EMP is a web-based application meant to provide a graphical user interface for the EMP application presented in the Hyperledger Fabric

## How to use EMP
The EMP interface is broken into three separate screens; the top left info screen, top right navigation screen and bottom block viewer.


There will also be a small status indicator in the lower right corner to indicate if the application is connected to the back-end server.

EMP has 4 main functions:

- Query a Employee
- Query all EMployees
- Transfer a Department
- Create a Employee ID


or displaying all emp when "Query All" is called


The "Feed" panel shows in real-time what the application is doing to interact with the underlying Blockchain.

For example, In a query request, the application only needs to query the peers as shown.

When a transfer or create request is invoked, the application has to make sure there is consensus amongst the peers before the change is committed to the ledger. Only then is the block added to the Blockchain and updated as shown.

The Blockchain viewer will also update reactively to any new blocks that have been added to the chain, even blocks not contributed by this client.

Feed messages will allow the user to see what is happening on the chaincode level when an invoke transaction is being called. 

The blockchain viewer will show the block number, channel the block is on, and the transaction IDs of transactions on that block.



## What technologies are being used
EMP's single-page application front-end is being powered by React; using create-react-app to bootstrap the project. A NodeJS Express server is used for the backend which, together with Socket.io, allow for the real-time updating of blocks.
Interfacing with the blockchain ledger is done via Hyperledger's Node SDK. All transactions are signed using the "user1" identity.

