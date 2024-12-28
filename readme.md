# Decentralized Escrow Application

This is an Escrow Dapp built with [Hardhat](https://hardhat.org/). It is deployed on Mainnet Fork instead of Goerli in Alchemy's tutorial (https://university.alchemy.com/course/ethereum/md/63f8fc3b7163970002576467) for testing, and later on you can select your preferred network when MetaMask popped up. Detailed modification see commit history.

## Project Layout
There are three top-level folders:
1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup for local testing
- install dependencies in the top-level directory with `npm install`
- run `npm install dotenv` and `touch .env` to store your `ALCHEMY_API_KEY`
- compile the contracts using `npx hardhat compile`
- run `npx hardhat node` to get some testing accounts (enter these accounts for Arbiter and Beneficiary)
- run `npx hardhat run scripts/deploy.js --network hardhat`

## Run Front-End
- `cd` into the `/app` directory and run `npm install`
- run `npm start` from the `/app` directory
- open [http://localhost:3000](http://localhost:3000) to view it in your browser
- fill-in Arbiter and Beneficiary boxes to create contract to prove
- new contract will appear on "Existing Contracts", approve it and it'll automatically appear on the network!