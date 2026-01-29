async function main() {
  const SigilNFT = await ethers.getContractFactory("SigilNFT");
  const nft = await SigilNFT.deploy();
  await nft.deployed();
  console.log("SigilNFT deployed at:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
