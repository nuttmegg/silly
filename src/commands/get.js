var { psc, bot } = require('../../index.js');
const { Soup } = require('stews');

async function data(ctx, cmd) {
    let stuff = require('../data/stuff.js').load();
    let index = cmd.args[0];
    
    
    if (!parseInt(index)+1) {
        return psc.reply("you have to put an index to get dumbass", { deleteAfter: "2s" });
    }
    if (parseInt(index) < 0) {
        return psc.reply("you can't get an index that's less than 0 dumbass", { deleteAfter: "2s" });
    }
    if (parseInt(index) > stuff.length-1) {
        return psc.reply("you can't get an index that's greater than the entirety of the stuff dumbass", { deleteAfter: "2s" });
    }
    
    
    let content = stuff.get(index);
    
    if (!content) {
        return psc.reply("whatever was there if something even was there it probably doesn't exist now so yeah", { deleteAfter: "2s" });
    }
    
    return ctx.reply(`index #${index} \n\n ${"`"}${content}${"`"}`);
}


psc.command({ name: "get", aliases: ["fetch", "at"] }, data);
