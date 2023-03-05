import {ethers} from 'ethers'
import { mainnet_provider, ERC20_ABI, address_dai} from './config.js'

const contract = new ethers.Contract(address_dai, ERC20_ABI, mainnet_provider)

const main = async() => {
    // 获取当前区块
    const block = await mainnet_provider.getBlockNumber()
    console.log(block)
    // eventname, from block, to block
    const transferEvents = await contract.queryFilter('Transfer', block-5, block)
    console.log(transferEvents)
}
main()