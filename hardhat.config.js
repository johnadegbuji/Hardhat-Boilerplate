require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require('hardhat-storage-layout');
require("@nomiclabs/hardhat-ganache");

const GOERLI_WALLET_PRIVATE_KEY = "b417f28293f32567fd676a911496d1bde5398ede91a71eb44fb6b5fb958fbe71";

module.exports = {
  solidity: "0.8.9",
  networks: {
    
    goerli: {
      url: `https://nd-817-788-025.p2pify.com/f5520aabef1f902ad258097f0564d138`,
      accounts: [GOERLI_WALLET_PRIVATE_KEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "A7RET3GDWZW3HDFS5ETM3Y9CEJERU83X9Y"
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : true
  }
};