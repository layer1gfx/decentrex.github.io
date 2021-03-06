/* eslint-env browser */

module.exports = {
  homeURL: 'https://decentrex.com',
  contractDecentrEx: 'smart_contract/decentrex.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractDecentrExAddrs: [
    { addr: '0xbf29685856fae1e228878dfb35b280c0adcc3b05', info: 'Deployed 05/26/2017' },
  ],
  ethTestnet: false,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: 'https://api.decentrex.com',
  userCookie: 'DecentrEx',
  eventsCacheCookie: 'DecentrEx_eventsCache',
  deadOrdersCacheCookie: 'DecentrEx_deadOrdersCache',
  ordersCacheCookie: 'DecentrEx_ordersCache',
  etherscanAPIKey: 'KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1',
  tokens: [
    { addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
    { addr: '0x960b236a07cf122663c4303350609a66a7b288c0', name: 'ANT', decimals: 18 },
    { addr: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7', name: '1ST', decimals: 18 },
    { addr: '0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac', name: 'BCAP', decimals: 0 },
    { addr: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c', name: 'BNT', decimals: 18 },
    { addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', name: 'DGD', decimals: 9 },
    { addr: '0x2e071d2966aa7d8decb1005885ba1977d6038a65', name: 'DICE', decimals: 16 },
    { addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c', name: 'EDG', decimals: 0 },
    { addr: '0x6810e776880c02933d47db1b9fc05908e5386b96', name: 'GNO', decimals: 18 },
    { addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c', name: 'GUP', decimals: 3 },
    { addr: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908', name: 'HMQ', decimals: 8 },
    { addr: '0x888666ca69e0f178ded6d75b5726cee99a87d698', name: 'ICN', decimals: 18 },
    { addr: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9', name: 'LUN', decimals: 18 },
    { addr: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', name: 'MLN', decimals: 18 },
    { addr: '0x45e42d659d9f9466cd5df622506033145a9b89bc', name: 'NXC', decimals: 3 },
    { addr: '0xd8912c10681d8b21fd3742244f44658dba12264e', name: 'PLU', decimals: 18 },
    { addr: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06', name: 'PTOY', decimals: 8 },	
    { addr: '0x48c80f1f4d53d5951e5d5438b54cba84f29f32a5', name: 'REP', decimals: 18 },
    { addr: '0x607f4c5bb672230e8672085532f7e901544a7375', name: 'RLC', decimals: 9 },
    { addr: '0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5', name: 'ROUND', decimals: 18 },
    { addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', name: 'SWT', decimals: 18 },
    { addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', name: 'SNGLS', decimals: 0 },
    { addr: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c', name: 'TAAS', decimals: 6 },
    { addr: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53', name: 'TIME', decimals: 8 },
    { addr: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a', name: 'TKN', decimals: 8 },
    { addr: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', name: 'TRST', decimals: 6 },
    { addr: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170', name: 'VSL', decimals: 18 },
    { addr: '0x667088b212ce3d06a1b553a7221e1fd19000d9af', name: 'WINGS', decimals: 18 },
    { addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81', name: 'XAUR', decimals: 8 },

  ],
  defaultPair: { token: 'ANT', base: 'ETH' },
  pairs: [
    { token: 'ANT', base: 'ETH' },
    { token: '1ST', base: 'ETH' },
    { token: 'BCAP', base: 'ETH' },
    { token: 'BNT', base: 'ETH' },
    { token: 'DGD', base: 'ETH' },
    { token: 'DICE', base: 'ETH' },
    { token: 'EDG', base: 'ETH' },
    { token: 'GNO', base: 'ETH' },
    { token: 'GUP', base: 'ETH' },
    { token: 'HMQ', base: 'ETH' },
    { token: 'ICN', base: 'ETH' },
    { token: 'LUN', base: 'ETH' },
    { token: 'MLN', base: 'ETH' },
    { token: 'NXC', base: 'ETH' },
    { token: 'PLU', base: 'ETH' },
    { token: 'PTOY', base: 'ETH' },
    { token: 'REP', base: 'ETH' },
    { token: 'RLC', base: 'ETH' },
    { token: 'ROUND', base: 'ETH' },
    { token: 'SNGLS', base: 'ETH' },
    { token: 'SWT', base: 'ETH' },
    { token: 'TAAS', base: 'ETH' },
    { token: 'TIME', base: 'ETH' },
    { token: 'TKN', base: 'ETH' },
    { token: 'TRST', base: 'ETH' },
    { token: 'VSL', base: 'ETH' },
    { token: 'WINGS', base: 'ETH' },
    { token: 'XAUR', base: 'ETH' },
  ],
};
