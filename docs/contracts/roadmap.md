# Contracts Roadmap

Currently, Pledgecamp smart contracts cover Backer Insurance, Camp Shares, and some management wrappers to allow the backend to control
accounts on behalf of platform users. The use of the blockchain is limited in this way for two reasons:

1. Cryptocurrency adoption is not widespread
  - Since Pledgecamp aims to provide a seamless crowdfunding experience, we cannot yet expect users to jump through the hoops necessary for
    interacting directly with the blockchain (e.g. downloading wallet software, signing up for an exchange like Coinbase, or navigating a
    DeX).
2. Ethereum gas prices are too high
  - As of now, pledging to a smart contract based crowdfunding contract would cost ~$5 - $10 USD. Crowdfunding must support low value
    purchases, and it's not acceptable for more than a few percent of a transaction to go to gas fees.

Keeping these two points in mind, we are initially only recording finalized pledges to the blockchain in order to track backer insurance and
enable decentralized voting on the release of reserved funds. Additionally, staking Pledge Coins to Camp Shares is on-chain from the
beginning because the above points aren't as severe for the type of user and transactions involved, and a future migration from an off-chain
system would take more effort than it's worth.

## Pledging

Moving project pledges to the blockchain is high priority. There are a few issues blocking this transition:

- Gas prices - it must be possible to make a $5 USD pledge or donation without paying more than 10% ($0.50) in transaction fees. We hope
  this will be possible once Ethereum sharding comes into effect, and will otherwise explore second layer options.
- Credit card support - seamlessly handling both on and off-chain payments is complicated, and it will take time to get it right.

The benefits of blockchain pledges are further decentralization, and support for payment via any ETH or any ERC20 token a creator wishes to
support.

## Vendor Marketplace

We are planning to build a blockchain based vendor marketplace for connecting creators and service providers. This is a secondary goal that
will be undertaken after the development on the main platform is complete.

## Governance

TBD - A blockchain based governance model for Pledgecamp
