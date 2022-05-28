const hre = require('hardhat')
const ethers = hre.ethers

async function main() {
  const contract = await ethers.getContractFactory('Roflan')
  const roflan = await contract.deploy()

  await roflan.deployed()

  console.log(`
    Deploying 
    =================
    "Roflan" contract address: ${roflan.address}
    ${await roflan.provider.getSigner().getAddress()} - deployed this contract
  `)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
