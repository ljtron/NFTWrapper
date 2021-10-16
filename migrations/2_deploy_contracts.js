//const ConvertLib = artifacts.require("ConvertLib");
//const MetaCoin = artifacts.require("MetaCoin");
const NFTCreator = artifacts.require("GameItem")
//const wrapper = artifacts.require("Stock")


module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);

  deployer.deploy(NFTCreator);
  //deployer.deploy(wrapper)


};
