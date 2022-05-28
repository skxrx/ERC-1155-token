import { Roflan } from './../typechain/Roflan'
import { task } from 'hardhat/config'

import '@nomiclabs/hardhat-ethers'

interface IArgs {
  contract: string
  id: string
  amount: string
}

task('mint', 'Mint nft')
  .addParam('contract', 'Contract address')
  .addParam('id', 'Token id')
  .addParam('amount', 'Amount nft')
  .setAction(async (args: IArgs, hre) => {
    const NFT = (await hre.ethers.getContractAt(
      'Roflan',
      args.contract
    )) as Roflan
    const [owner] = await hre.ethers.getSigners()

    const tx = await NFT.mint(owner.address, args.id, args.amount, '0x00')
    await tx.wait()

    console.log(`Successfully minted nft`)
  })

export {}
