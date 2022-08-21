require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",

  networks: {
    
    "optimism": {
       url: process.env.REACT_APP_ALCHEMY_API_URL,
       accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    }
  }
};
