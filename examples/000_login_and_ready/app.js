/**
 *  @author Federico Grandi <fgrandi30@gmail.com>
 *  @see {@link https://endbug.gitbooks.io/discord-bot-101-discord-js}
 */

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token);

client.on("error", (e) => console.error(e));
client.on("warn", (w) => console.warn(w));
client.on("debug", (d) => console.info(d));

client.on("ready", () => {
  //code here
});
