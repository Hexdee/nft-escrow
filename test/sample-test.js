const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTEscrow", function () {
  it("Should start a new Trade", async function () {
    const NFTEscrow = await ethers.getContractFactory("NFTEscrow");
    const nftEscrow = await NFTEscrow.deploy();
    await nftEscrow.deployed();

    //expect(await nftEscrow.greet()).to.equal("Hello, world!");
    console.log("deployed");
    //const newEscrow = await nftEscrow.startEscrow();

    // wait until the transaction is mined
    await newEscrow.wait();

    expect(await nftEscrow.Escrows(0)).buyer.to.equal(buyer);
  });
});
