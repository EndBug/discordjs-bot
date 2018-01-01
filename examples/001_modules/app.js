/**
 *  @author Federico Grandi <fgrandi30@gmail.com>
 *  @see {@link https://endbug.gitbooks.io/discord-bot-101-discord-js}
 */

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const file = require("./file.js");

client.login(config.token);

client.on("error", (e) => console.error(e));
client.on("warn", (w) => console.warn(w));
client.on("debug", (d) => console.info(d));

client.on("ready", () => {
  let exp;
  if (file.likesGoT) exp = "It does.";
  else exp = "It doesn't.";
  module.exports = {
    exp,
    likesIt: file.likesGoT
  };
  module.exports.returnedV = file.run();
});
