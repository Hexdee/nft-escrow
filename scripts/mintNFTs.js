const hre = require("hardhat");

async function main() {

  const NFT = await ethers.getContractFactory("TIGERS");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT contract address: ", nft.address);

  const tigers = ["cute", "devil", "king", "bad", "black", "ninja"];

  const tigersURI = [
      "ipfs://bafyreigmlhvcr3lp75lptcpyjnan7eb4piymejr56ommeczhodndl2nm4u/metadata.json",
      "ipfs://bafyreig6bucitn4kmz7gw3enbe2u7ibj2ofo6crootnxh57nqeizhvjaea/metadata.json",
      "ipfs://bafyreieqsbzmdrooibpfpwrrprqe5izwpij6oqvfrylt6btnvyyta2hlzm/metadata.json",
      "ipfs://bafyreibyvtwlxxaihkrw4i6ioathzh7gkoyupjicwjh7ayhjymeloualke/metadata.json",
      "ipfs://bafyreic6ixfmx7bvnfftdv5zlpces2nm6tgquszqqtgsyndkdq735bb3bu/metadata.json",
      "ipfs://bafyreibtek5dzfgifqj5ppall7nnvtjiwgpy3vz5fzpoyatl3zbgxwfrdy/metadata.json"
  ]

  let i = 0;
  while (i < 6) {
    await nft.safeMint(tigersURI[i])
    console.log(`${tigers[i]}Tiger token id: ${i}`)
    console.log(`View on etherscan: https://testnets.opensea.io/assets/mumbai/${nft.address}/${i}`)
    i++;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

