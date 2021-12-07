require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure shadow bike decrease mad social great light army gate'; 
let testAccounts = [
"0xda9c81ab85d9754e46dce52931ac62de0137bd3b55cb4e92c98d2ca15ec1355d",
"0x41b7a735297faf4992f04ae449035b41bfc40f80a9ecf2a81032e548ebf8e920",
"0xdc9154dcca74fedeb02a52b3839935843af3501fcc48c62f38090ddefbee3ca0",
"0x03ca991d432bc9cde9fbbebfd8bc0b32c2fb152ab65fe1a023f527f99d09269c",
"0x5d42f17e55613051651e30b21a6f75d898453b78fc56ec4ade4fe1a9fe31ac30",
"0x9f155180edfc93a05d942037634f993e9a5cea1cf58ed68d92b50101cad0b257",
"0xc781b5c76b9a6edb416bf58aac37c0366a0a87061451c64e9ebc28325532312f",
"0x696330824185196a4ebea33c02a52bf673f61de02927130768e7db9cb7f55c8b",
"0xf5b9690fcb1bb8f01b88bc314d2e0d9ea79d876ebb12b9f65016ac809424ba3b",
"0x0867475ed358cd66d87a07c846ecdc891915f40dcbb46b0e85531d59cb3173ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


