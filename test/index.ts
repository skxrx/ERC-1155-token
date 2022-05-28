import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'
import { Roflan, Roflan__factory } from '../typechain'

// Some constants for testing
const id: number = 1
const amount: number = 1
const arrIds = [1, 2, 3]
const arrAmount = [3, 5, 10]
const BaseURI: string = `ipfs://QmZTa49SRSpsq3po1SUy2tSbqxqy8EdSziFMrVGhTy3n4y/{id}.json`

describe('1155', function () {
  let contract: Roflan
  let signers: SignerWithAddress[]
  let owner: SignerWithAddress

  beforeEach(async function () {
    ;[owner] = await ethers.getSigners()
    contract = await new Roflan__factory(owner).deploy()
  })

  describe('Test functions', function () {
    it('Mint nft', async function () {
      console.log(owner)
      await contract.mint(owner.address, 1, 1, '0x00')
    })

    it('Mint batch nft', async function () {
      await contract.mintBatch(owner.address, arrIds, arrAmount, '0x00')
    })
  })
})
