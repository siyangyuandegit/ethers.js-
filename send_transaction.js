import {goerli_provider, private_key, account1, account2} from './config.js'
import {ethers} from 'ethers'

// 创建一个钱包对象
const wallet = new ethers.Wallet(private_key, goerli_provider)

const main = async() => {

    // 检查两个账户的余额
    const sender_before = await goerli_provider.getBalance(account1);
    const reciever_before = await goerli_provider.getBalance(account2);
    console.log('sender before balance: ', ethers.utils.formatEther(sender_before))
    console.log('reciever before balance: ', ethers.utils.formatEther(reciever_before))
    // 发送交易
    const tx =  await wallet.sendTransaction({
        to: account1,
        value: ethers.utils.parseEther("0.01")
    })

    // 等待tx返回，获取交易
    await tx.wait()
    console.log(tx)
    const sender_after = await goerli_provider.getBalance(account1);
    const reciever_after = await goerli_provider.getBalance(account2);
    console.log('sender after balance: ', ethers.utils.formatEther(sender_after))
    console.log('reciever after balance: ', ethers.utils.formatEther(reciever_after))
}

main()