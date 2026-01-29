// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SigilNFT {
    string public name = "Sigil Codex";
    string public symbol = "SIGIL";

    uint256 public totalSupply;
    address public owner;

    mapping(uint256 => address) public ownerOf;
    mapping(address => uint256[]) public tokensOf;

    event Minted(address indexed user, uint256 indexed tokenId, string sigilHash);

    constructor() {
        owner = msg.sender;
    }

    function mint(string memory sigilHash) external returns (uint256) {
        uint256 tokenId = totalSupply + 1;
        totalSupply = tokenId;
        ownerOf[tokenId] = msg.sender;
        tokensOf[msg.sender].push(tokenId);
        emit Minted(msg.sender, tokenId, sigilHash);
        return tokenId;
    }

    function tokensByOwner(address user) external view returns (uint256[] memory) {
        return tokensOf[user];
    }
}
