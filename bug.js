const HDWalletProvider = require('@truffle/hdwallet-provider');
const contract = require('@truffle/contract');
const artifact = require('./artifact.json');

const mnemonic = 'blanket process bachelor mercy long dove place rally jewel train oblige raw';
const providerUrl = 'http://127.0.0.1:8545';

const anchorContract = contract(artifact);
const provider = new HDWalletProvider(mnemonic, providerUrl);
anchorContract.setProvider(provider);
anchorContract.new({ from: provider.addresses[0] });

