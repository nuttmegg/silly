var { psc, bot } = require('../../index.js');
var { Paged } = require('../classes');
const { Soup } = require('stews');

async function data(ctx) {
    let stuff = require('../data/stuff.js').load().copy();
    let page = 1;

	stuff = stuff.map( (v, i) => { return `#${i}:**  **${"`"}${v}${"`"}` })

	
    let paged = new Paged(5, stuff);
    if (paged.total <= 0) {
        return ctx.reply("there are none rn come back later ig and maybe there will be stuff we'll see yeah");
    }

	
    let bigleft = new psc.Button({ id: "stewd/bigleft", label: "->> big left", style: "secondary" });
    let left = new psc.Button({ id: "stewd/left", label: "-> left", style: "secondary" });
    let right = new psc.Button({ id: "stewd/right", label: "<- right", style: "secondary" });
    let bigright = new psc.Button({ id: "stewd/bigright", label: " big right <<-", style: "secondary" });
	
    let row = new psc.ActionRow([ bigleft, left, right, bigright ]);

	
    return psc.reply(`page ${page}/${paged.pages} \n\n ${paged.page(page).join("\n")}`, { components: [row] });
}


psc.buttonAction(data);
