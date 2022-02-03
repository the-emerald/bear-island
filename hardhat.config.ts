import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },

  gasReporter: {
    currency: 'USD',
    excludeContracts: ["DummyWETH.sol"],
    showMethodSig: true,
  },

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: {
        mnemonic: process.env.MNEMONIC !== undefined ? process.env.MNEMONIC : ""
      }
    },

    mainnet: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: {
        mnemonic: process.env.MNEMONIC !== undefined ? process.env.MNEMONIC : ""
      }
    }
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN !== undefined ? process.env.ETHERSCAN : ""
  },

  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
};

export default config;
