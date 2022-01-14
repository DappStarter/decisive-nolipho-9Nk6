require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember social hockey entire borrow team'; 
let testAccounts = [
"0x94cf66af9084f59072c3baef0ec518d36413f9c132058215246791bd981d0900",
"0xea38533ae2b834d30c468f70aaafe93a6890255d6dd6a0e5998e82784779e4ee",
"0xfd7df55bebd48e91a104a125c8ca3b0cb91773cb310f5c7bc8d3699b14867934",
"0x1756a046371b651ae6ed1456300b5389199d63ffca1167051e9b11996a6bdd80",
"0x31eacec2d13baa5f83e7fe68b29d3ed89fb2995b7c969802ae3b51b9c8b73af8",
"0x3171b52011f6fa15da3cc071c3d4d2a0e3d4d9070e7f34ef0e7a402ca33c8147",
"0x3e933da268f6e96e1c1744d836a3a5c56bba091ed52e66c5d3508bf70d398a57",
"0x0ed644bc5dbd5921c6294ed81daeab0e6f144b23d2c166f2941d6633db0cc389",
"0x652d2ac4c9f03e07d9f2671b74069d11a79aceca2e77b14edfe67cea963aff2e",
"0x4ecf6651039c0acd4f5e0fcf1e86f1d117702bb459640b08bffcbd1e545bd6a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

