# Pledgecamp Nodeserver

The Nodeserver is a layer over the Blockchain (via [web3.js](https://github.com/ChainSafe/web3.js)) for interacting with Pledgecamp smart contracts. It provides API endpoints
calling smart contract functions and tracking contract data. It also tracks transaction statuses in order to allow the Oracle to easy
determine the state of any operation.
