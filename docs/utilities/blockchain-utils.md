# Blockchain Utilities

A suite of utility functions for interacting with the blockchain. Functions are separated into Pledgecamp-specific and general blockchain
helpers. The library provides a consolidated package of basic blockchain operations for use across all projects that interact with the blockchain.  It contains functions such as the following:
- Manage connection to Web3
- Calculate and manage gas prices
- Loading contract objects for use within projects
- View balances and wallet addresses
- Sign and transfer transactions
- Handle events coming back from the blockchain
- Updating and setting basic blockchain settings

## Common Directory

### contracts-setup script

Mainly in charge of setting up tokens and assigning them to appropriate contracts after deployment.

Also creates connections between contracts for future inter-contract interactions.  Currently supports the following connections:
* Administrator to CampShareManager
* AccountStorage to AccountManager
* AccountManager to CampShareManager
* AccountManager to Administrator
* CampShareManager to Administrator
* CampShareManager to Moderator
* CampShareStorage to CampShareManager

### derivePrivateKey

Derives the private key given by BIP index and the coin index

 * `bipIdx` [integer]: BIP index
 * `coin` [integer]: Coin index
 * `changeIndex` [integer]: 0 = External chain (default), 1 = Internal chain
 * @returns [string] Private key

## Ethereum Directory

###  checkAddress

Checks if address is a valid Ethereum address

* `address` [string]: The target wallet address to check
* @returns [boolean]: True or false depending on result

###  getBalance

Gets token/ETH balance

* `address` [string]: Changes the BIP index involved in the operation
* `token` [string]: Name of the token balance to check (Currently only 'eth' and 'plg' available)
* `accountId` [string]: Id of token account
* `tokenContractObject` [string]: The token web3 object (Only for tokens other than 'eth')
* @returns [BigNumber] Balance in BigNumber format

###  getAccountFromBipIndex

Get address from bip wallet index

* `bipIdx` [integer]: Bip wallet Index
* `changeIndex` [integer]: 0 = External chain (default), 1 = Internal chain
* `coinIdx` [integer]: Registered coin type code (Default 60 = ETH)
*  @returns [string] Derived wallet address

###  updateCommunalWalletTransactionIndex

Sets the communal wallet index to the 0 index address

* @returns [string] Nonce

###  getAmountHex

Convert string representation of a numerical number into hex

* `valString` [string]: String representation of number
* @returns [string] Hex representation of number

###  getConfirmationTime

Get block timestamp of a transaction in the ETH timestamp format

* `txHash` [string]: Transaction hash
* @returns [BigNumber] Block timestamp of transaction

###  getCurrentBlockNumber

Get current block number on the blockchain

* @returns [BigNumber] Block number in BigNumber format

###  getTransactionReceipt

Get transaction receipt object from blockchain

* `txHash` [string]: Transaction hash
* @returns [object] Transaction receipt object

###  getTransactionCount

Get number of transactions (nonce) from this address

* `address` [string]: Target address to check transaction count
* @returns [string] Transaction count in string format

###  getTransactionList

Get transaction list of a certain wallet address

* `walletAddress` [string]: Target wallet address to get transaction list from
* `startCondition`[integer]: Transaction number to start counting from (Default 0)
* `etherscanPath` [string]: Route for Etherscan API
* `etherscanApiKey` [string]: API Key for Etherscan
* @returns [map] Map of transactions

###  setConfirmationWaitTime

Set current settings for time needed to confirm transaction on blockchain

*  `confirmationNum` [integer]: Number of blocks to wait for a finalized transaction
*  `time` [integer]: The time needed for one block to be confirmed

###  getConfirmationWaitTime

Get current settings for time needed to confirm transaction on blockchain

* @returns [BigNumber] Total estimated confirmation time in BigNumber format

###  loadContract

Get contract reference

* `contractReference` [string]: The filename of the contract json file (ie. PLGToken if PLGToken.json)
* `path` [string]: The local path of the contract's json file
* @returns [object] Contract web3 reference object

###  loadLiveContract

Gets contract web3 object of a previously deployed contract

* `contractReference` [string]: The filename of the contract json file (ie. PLGToken if PLGToken.json)
* `address` [string]: The deployed contract address
* `path` [string]: The local path of the contract's json file
* @returns [object] Contract web3 reference object

###  loadContractByteCode

Gets contract bytecode

* `contractReference` [string]: The filename of the contract json file (ie. PLGToken if PLGToken.json)
* `path` [string]: The local path of the contract's json file
* @returns [string] Contract bytecode

###  transfer

Perform a transfer from an account that we control

* `txParam` [object]:
    `transactionType` [string]: Type of transaction
    `amount` [integer]: Amount to transfer
    `toAddress` [string]: Target address
    `bipIndex` [integer]: bipIndex value
    `changeIndex` [integer]: 0 = External chain (default), 1 = Internal chain
    `coinIndex` [integer]: 60 = Ethereum
    `abiData` [string]: Encoded contract abi data
    `abiType` [integer]: Value used for gasEstimate() - 0 = raw, 1 = bareTransaction
    `callbackURL` [string]: Callback URL
* `gasParams` [object]:
    `priorityFactor` [integer]: Priority factor to allocate more gas for urgent operations
    `opsFactor` [integer]: Ops factor of transaction to allocate more gas for gas intense operations
    `baseGasIndex` [integer]: Base gas level to use for operations
    `isDeploy` [integer]: TRUE = deploy contract operation, FALSE = all other operations
    `gasPriceLevel` [integer]: Level of speed required for transaction (Range from 1 - FASTEST to 4 - SLOWEST)
* @returns [object] Transaction hash\

###  setProvider

Gets web3 client object

* `rpcProviderMethod` [string]: Method of web3 connection (HTTP, IPC, Websocket)
* `rpcProviderAddress` [string]: Route for connection
* @returns [object] Web3 object

###  getClient

Get web3 client object
* @returns [object] Web3 object

###  eventHandler

Decodes and returns event logs from the blockchain

* `logs` [object]: Transaction log object
* `transactionType` [string]: Type or category of transaction
* @returns [array] Array of contract event contents

###  transactionSign

Signs transaction and returns serialized transaction

*  `transactionParams` [object]: Transaction parameters to initialize transaction
*  `bipIndex` [integer]: Bip wallet Index
*  `changeIndex` [integer]: 0 = External chain (default), 1 = Internal chain
*  `coinIdx` [integer]: Registered coin type code (Default 60 = ETH)
*  `chainName` [string]: Name of network
*  @returns [string] Serialized signed transaction

###  getSerializedTrans

Gets serialized transaction

*  `gasParams` [object]:
    `priorityFactor` [integer]: Priority factor to allocate more gas for urgent operations
    `opsFactor` [integer]: Ops factor of transaction to allocate more gas for gas intense operations
    `baseGasIndex` [integer]: Base gas level to use for operations
    `isDeploy` [integer]: TRUE = deploy contract operation, FALSE = all other operations
    `gasPriceLevel` [integer]: Level of speed required for transaction (Range from 1 - FASTEST to 4 - SLOWEST)
*  [integer] `activityId` Activity ID associated with transaction
*  [object] `txParam`
    `transactionType` [string]: Type of transaction
    `toAddress` [string]: Target address
    `bipIndex` [integer]: bipIndex value
    `changeIndex` [integer]: 0 = External chain (default), 1 = Internal chain
    `coinIndex` [integer]: 60 = Ethereum
    `abiData` [string]: Encoded contract abi data
    `abiType` [integer]: Value used for gasEstimate() - 0 = raw, 1 = bareTransaction
    `callbackURL` [string]: Callback URL
* @returns [object] Transaction data object

###  pullGasPrice

Gets latest Gas Prices from ETH Gas Station

* `ethGasAPI` [string]: ETH Gas Station API route and API key
* @returns [object] Latest priceData object

###  getGasPrice

Gets and calculates gas price to use based on various priority factors

* `gasLevel` [integer]: Level of speed required for transaction (Range from 1 - FASTEST to 4 - SLOWEST)
* `priorityFactor` [integer]: Priority factor to allocate more gas for urgent operations
* `opsFactor` [integer]: Ops factor of transaction to allocate more gas for gas intense operations
* @returns [BigNumber] Final gas price

###  setAdminWalletAddress

Sets wallet address as default admin wallet

*  `walletAddress` [string]: Address of target wallet

###  getAdminWalletAddress

Gets default admin wallet address

* @returns [string] Current default admin wallet address

###  calcGas

Calculates gas estimate including priority and ops factors

* `isDeploy` [boolean]: Whether or not transaction involves contract deployment
* `abiData` [string]: Abi data from contract
* `priorityFactor` [integer]: Priority factor to allocate more gas for urgent operations
* `opsFactor` [integer]: Ops factor of transaction to allocate more gas for gas intense operations
* `baseGas` [integer]: Minimum base gas level for transaction
* `gasLevel` [integer]: Level of speed required for transaction (Range from 1 - FASTEST to 4 - SLOWEST)
* `toAddress` [string]: Target address of transaction
* @returns [BigNumber] Total estimated gas price

###  setPrivateKey

Sets private key of account

* `key` [string]: Wallet private key
* @returns [string] Set private key

###  setMnemonic

Sets list of mnemonic phrases

* `mnemonicPhrases` [string]: List of mnemonic phrases
* @returns [string] Set of mnemonicPhrases

###  setMnemonicPassword

Sets list of mnemonic password

* `mnemonicPassword` [string]: Mnemonic password
* @returns [string] The mnemonic password
