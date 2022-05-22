require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

var secret = require("./secret.json");

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${secret.APP_ID}`,
      accounts: [secret.PRIVATE_KEY1, secret.PRIVATE_KEY2 ]
    }
  },
  etherscan: {
    apiKey: secret.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}