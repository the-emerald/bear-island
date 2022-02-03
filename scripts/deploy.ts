// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers } from "hardhat";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const BASE_URI = "https://replace-me.com/";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const BearIsland = await ethers.getContractFactory("BearIsland");
  const bearIsland = await BearIsland.deploy(BASE_URI);

  await bearIsland.deployed();

  console.log("BearIsland deployed to:", bearIsland.address);
  console.log("Waiting 75 seconds... do not exit the script.");

  // 75s = 5 blocks
  await delay(75000);

  await run("verify:verify", {
    address: bearIsland.address,
    constructorArguments: [BASE_URI]
  });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
