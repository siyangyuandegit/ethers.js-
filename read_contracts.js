// 从utils中导入provider，不再赘述
import { ethers } from 'ethers'
import {mainnet_provider, address_dai, ERC20_ABI} from './config.js'


// 只读合约，只需要提供provider，可交互合约则需要提供sig
const contract = new ethers.Contract(address_dai, ERC20_ABI, mainnet_provider)

const main = async() => {
    const name = await contract.name()
    const totalSupply = await contract.totalSupply()
    console.log('name: ', name)
    console.log('totalSupply: ', totalSupply)
}

main()