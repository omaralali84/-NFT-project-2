require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: "YOUR_INFURA_OR_ALCHEMY_URL",
            accounts: ["YOUR_PRIVATE_KEY"]
        }
    }
};
