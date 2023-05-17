var { psc, bot } = require('../../index.js');
const { Soup } = require('stews');

async function data(ctx, cmd) {
    let stuff = require('../data/stuff.js').load();
    let file = "./src/data/stuff.json");
    
    let j = cmd.args.join(" ");
  
    if (stuff.includes(j)) {
        return psc.reply("That's already in there dumbass", { deleteAfter: "2s" });
    }
    else stuff.push(j);
    stuff.dump(file, null, 4);
    
    return ctx.reply("Added your shit `"+j+"`");
}


psc.command({ name: "new", aliases: "add" }, data);
