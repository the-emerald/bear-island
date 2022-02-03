# bear-island

Contracts for the Bear Island NFT collection.

## Quickstart
1. `npm i`
2. Using your favourite text editor, update `BASE_URI` in `scripts/deploy.ts` to the correct URI, and `ADMIN_ADDRESS` to a secure address.
3. Using your favourite text editor, create `.env` in the root directory:
```
MNEMONIC="your deployer seed phrase goes here please be sensible"
ETHERSCAN="your_etherscan_api_key"
```
4. `npx hardhat run scripts/deploy.ts` (be sure to fund your deployer key!)