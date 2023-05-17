const BlockClass = require ('./block.js')

//creating a block

const block =new BlockClass.Block("blockchain udacity")

block.generateHash().then((result)=>{
    console.log(` Block Hash : ${result.hash}`)
    console.log(` Block : ${JSON.stringify(result).toString()}`)
}).catch((error)=>{ console.log(error)})