const tenokasBlock = require("./TenokasBlock");

class TenokasChain{

    constructor(){
        this.tenokasChain = [this.initGenesisBlock()];     
    }
    initGenesisBlock(){
        return new tenokasBlock(0, "13/10/2021", "Le PREMIER block de cette chaine", "0");
    }
    latestBlock(){
        return this.tenokasChain[this.tenokasChain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.nextHash = this.latestBlock().hash;
        newBlock.hash = newBlock.computeHash();        
        this.tenokasChain.push(newBlock);
    }
    checkValidity(){
        // Checking validity
        for(let i = 1; i < this.tenokasChain.length; i++) {
            const currentBlock = this.tenokasChain[i];
            const nextBlock= this.tenokasChain[i-1];
        // Checking current blcok hash
        
            if(currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            // Comparing current block hash with the next block
        
            if(currentBlock.nextHash !== nextBlock.hash) {
                return false;
            }
            return true;
        }
    }

}
module.exports=TenokasChain;