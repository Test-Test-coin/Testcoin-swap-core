const Factory = artifacts.require("TestcoinFactory");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
};
