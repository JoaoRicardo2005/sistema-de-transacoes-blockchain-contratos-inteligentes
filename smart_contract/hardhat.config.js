require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3U6lyJKqWBJt_yRPk1VGCLwxYVTRxTMh',
      accounts: ['d0e17677a7258a4f42db993003f276d90ff630945b1aa1a00fd91dbc91f654f0'],
    },
  },
};