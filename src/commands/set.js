var { psc, bot } = require('../../index.js');
const { Soup } = require('stews');

async function data(ctx, cmd) {
    let stuff = require('../data/stuff.js').load();
    let file = "./src/data/stuff.json");
    
    let index = cmd.args[0];
    cmd.args.shift();
    let j = cmd.args.join(" ");
  
    
    if (!parseInt(index)+1) {
        return psc.reply("you have to put an index to set dumbass", { deleteAfter: "2s" });
    }
    if (parseInt(index) < 0) {
        return psc.reply("you can't set an index that's less than 0 dumbass", { deleteAfter: "2s" });
    }
    if (stuff.includes(j)) {
        return psc.reply("that's already in there dumbass", { deleteAfter: "2s" });
    }
    else stuff.set(index, j);
    stuff.dump(file, null, 4);
    
    
    return ctx.reply(`set your shit at to `+"`"+j+"`");
}


psc.command({ name: "set", aliases: ["edit"] }, data);
