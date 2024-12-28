async function main() {
  const [deployer] = await ethers.getSigners();
  const arbiter = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Address #0
  const beneficiary = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // Address #1

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(arbiter, beneficiary, { value: ethers.utils.parseEther("1.0") });
  console.log("Escrow contract deployed to:", escrow.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });