// 首先导入ethers的依赖
import  { ethers } from 'ethers'
import {provider} from './utils.js'
// 查询地址
const address = '0x5609691B045005D0B834ea8a311DEe51B618b236'
// 定义一个异步函数
const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}
main()