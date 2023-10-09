import { ChainId } from "./chainIds"

export const POOL_DEPLOYER_ADDRESSES = {
    [ChainId.MantleTestnet]: '0x07099fEf5825e3298111C21a23A1283aB24eDb39',
    [ChainId.Goerli]: '0x03f8B4b140249Dc7B2503C928E7258CCe1d91F1A'
}

export const POOL_INIT_CODE_HASH = {
    [ChainId.MantleTestnet]: '0x634db8d334cf38f8d669064fefe5c4f5cf194cab753e4ed23256fb4dd545ed7a',
    [ChainId.Goerli]: '0x177d5fbf994f4d130c008797563306f1a168dc689f81b2fa23b4396931014d91'
}