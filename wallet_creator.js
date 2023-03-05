import { ethers } from "ethers";

var wallet
const regex = /^0x000.*.8888$/
var i = 0
var isValid = false
while(!isValid){
    wallet = ethers.Wallet.createRandom()
    isValid = regex.test(wallet.address)
    console.log(`第${i}次寻找`)
    i++
}

console.log("靓号地址: ", wallet.address)
console.log("靓号私钥: ", wallet.privateKey)