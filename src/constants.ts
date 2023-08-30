import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  NOVA = 87,
  FANTOM = 250,
  WAVE = 550,
  BITNET = 210,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.NOVA]: '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55',
  [ChainId.WAVE]: '0x1F68F0Ac4Cd9387A0e6eB6F3B894Cb98177AB0a4',
  [ChainId.FANTOM]: '0x9550b0c83AD5a58898cD4267987Af67e7E52bF55',
  [ChainId.BITNET]: '0xCba3Dc15Cfbcd900cF8133E39257c26727E86e3a',
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.NOVA]: '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07',
  [ChainId.WAVE]: '0xc3c90899ffbab4fde73965749d2c0b9462b16a2965a2d1eafc21630dfb68552c',
  [ChainId.FANTOM]: '0x6e898add6d04d6443c8d2544bc82ca8351779bf4ae92a6e7a5d313be8603ea07',
  [ChainId.BITNET]: '0xf06bde01e9762a7025e7a8d8c95d47fc18e8d5fc2588f7dacf399f504b1fedab',
}

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
