const TenokasChain = require('./TenokasChain'); 
const TenokasBlock = require('./TenokasBlock');
let tenokasChain = new TenokasChain();

tenokasChain.addNewBlock(new TenokasBlock(1, "13/10/2021", {sender: "Mathias", recipient: "Antonin", quantity: 20}));

tenokasChain.addNewBlock(new TenokasBlock(2, "13/10/2021", {sender: "Clément", recipient: "Nicolas", quantity: 349}));

console.log(JSON.stringify(tenokasChain, null, 4));