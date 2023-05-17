const { Client, ActivityType } = require('discord.js');
const bot = new Client({ intents: 33283 });
const { PSClient } = require('./src/packages/discordpps');
const psc = new PSClient({ client: bot, prefix: "s!" });

const config = require('./config.json');
const stuff = require('./stuff.js');

/* login stuff */
bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`);
	update();
});


/* status updates on message */
bot.on("messageCreate", () => {
	update();
});


/* status updater */
function update() {
	bot.user.setPresence({
		activities: [{
			name: `over ${stuff.length} things`,
			type: ActivityType.Watching
		}]
	});
}


/* logs in and sets up the stuff for the commands to work */
bot.login(config.token);
module.exports = { psc, bot };

psc.setCooldown(3);
