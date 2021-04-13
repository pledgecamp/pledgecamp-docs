# Pledgecamp Smart Contracts

The Pledgecamp smart contract suite is written in Solidity and deployed to the Ethereum testnet and mainnet.

The contracts back the [Pledge Coin (PLG) and Camp Share
(CS)](https://medium.com/pledgecamp/decoding-the-pledgecamp-two-token-economy-7da1a854e06e) economy, as well as the [Backer
Insurance](https://medium.com/pledgecamp/how-backer-insurance-works-on-pledgecamp-ca233b7e14ff) system.

## Overview
The Pledgecamp smart contract ecosystem serves four major purposes:
- Enable trading of Pledge Coin (PLG), the main unit of exchange on Pledgecamp
- Enforce holding of, and voting on, backer insurance for projects
- Implement decentralized moderation of projects that have been flagged for review
- Allow staking of PLG in the form of Camp Shares
- Simplify access to the Pledgecamp features with an on-chain managed account system

Pledge Coin is a custom ERC20 implementation with trade locking and token burning capabilities. It was developed and audited in 2018 along
with a basic crowdsale contract, located [here](https://github.com/pledgecamp/pledgecamp-ico-public). Pledge Coin was initially released in
February 2019 with a total supply of 1 trillion, and reissued in May 2019 with a total supply of 10 billion. The `PLGToken.sol` contract in
this repository is an exact copy of the version used in the reissue. More details on the contract itself can be found below.
