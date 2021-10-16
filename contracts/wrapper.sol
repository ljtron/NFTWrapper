// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

contract Stock is ERC20 {
    string public shoe;
    address nft;

    constructor(uint256 initialSupply, string memory _shoe, address _nft) ERC20("shoe", "GLD"){
        
        _mint(msg.sender, initialSupply);
        shoe = _shoe;
        nft = _nft;
    }
}