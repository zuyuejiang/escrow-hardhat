require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      },
    },
  }
};