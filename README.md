# Basic Sample Hardhat Project

### Compile

```
npx hardhat compile
```

### Set up deployment

Create a `secret.json` file with the following content:

```
{
    "APP_ID": "Your [Matic RPC](https://rpc.maticvigil.com/) appId",
    "PRIVATE_KEY1": "Your mumbai testnet account private key",
    "PRIVATE_KEY2": "Another mumbai testnet account private key",
    "POLYGONSCAN_API_KEY": "Your [polygonscan](https://polygonscan.com/register) api key"
}
```

### Deploy to mumbai testnet

```
npx hardhat run scripts/deploy.js --network mumbai
```

### Verify on polygonscan

```
npx hardhat verify --network mumbai {DEPLOYED_CONTRACT_ADDRESS}
```

### Mint some test nfts

You can also mint some test NFTs by running this command

```
npx hardhat run scripts/mintNFTs.js
```
