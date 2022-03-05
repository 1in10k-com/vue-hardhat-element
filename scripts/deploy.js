const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log("Storage deployed to:", storage.address);

  let config = `
  export const storageaddress = "${storage.address}"
  `;

  let data = JSON.stringify(config);
  fs.writeFileSync("config.js", JSON.parse(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
