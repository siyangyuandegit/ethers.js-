import  { ethers } from "ethers"
const Alchemy_ID = '_rjj-4defq6ebzEwujx3k_gkxisrSBOj'
const INFURA_ID = 'fc0c9341969c447f94dae67f35b8f224'
export const mainnet_provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${Alchemy_ID}`)
export const goerli_provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)
// dai的主网地址
export const address_dai = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
// sedner key
export const private_key = '247dcab6158bd2e46450057e711916ec067e3c950819419707321cb1c7002fd0'
// reciever address
export const account1 = '0x87e04faaC1a80614b735BDda47D3FA2042b1c373'
// sender address
export const account2 = '0x50bB6bB5A6c5E688Ad1A2A480d145fBDb8e9826B'
// erc20常用的abi
// abi可以放真正的abi，也可以使用函数定义的方式提供
export const ERC20_ABI = [
    "function name() view returns(string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns(uint)",
    "function transfer(address,uint256) returns(bool)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
]