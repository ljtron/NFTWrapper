const NFtCreator = artifacts.require("GameItem");

contract("GameItem", (accounts) =>{
    // beforeEach(async function(){
    //     this.NFtCreator = await NFtCreator.new(accounts[0], "jordan1")
    // })
    it("should create a nft", async function(){
        const instance = await NFtCreator.deployed();
        const id = await instance.awardItem.call(accounts[0], "jordan1");
        console.log(id)
    })
})