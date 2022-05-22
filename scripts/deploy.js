const hre = require("hardhat");

async function main() {

  const Escrow = await ethers.getContractFactory("NFTEscrow");
  const escrow = await Escrow.deploy();

  await escrow.deployed();

  console.log("Escrow deployed to:", escrow.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
