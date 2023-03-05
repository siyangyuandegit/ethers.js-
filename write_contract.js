import {ethers} from 'ethers'
import {ERC20_ABI, goerli_provider, account1, account2, private_key} from './config.js'

// goerli测试网随便找的一个合约地址
const address = '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b'
// 新建钱包对象,这里有两种方法
const wallet = new ethers.Wallet(private_key, goerli_provider)
// 新建可交互合约
// 1、直接传入wallet，声明为可写合约
// const contract = new ethers.Contract(address, wallet) 
// 2、传入provider，通过contract.connect(wallet)的方法转变为可写合约
const contract = new ethers.Contract(address, ERC20_ABI, goerli_provider)

const main = async() =>{
    // 合约连接钱包
    const contractWithWallet = contract.connect(wallet)
    // 后续就可以与合约进行交互了
    const tx = await contractWithWallet.transfer(account1, 100000)
    await tx.wait()

    console.log(tx)
}

