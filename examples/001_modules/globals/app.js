/**
 *  @author Federico Grandi <fgrandi30@gmail.com>
 *  @see {@link https://endbug.gitbooks.io/discord-bot-101-discord-js}
 */

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const file = require("./file.js");

/**
 * goGlobal - Adds the object that you pass as argument to global
 *
 * @param  {object} obj the key and its value will be "copied" into global
 * @return {undefined}
 */

function goGlobal (obj) {
  for (let key in obj) {
    global[key] = obj[key];
  }
}

client.login(config.token);

client.on("error", (e) => console.error(e));
client.on("warn", (w) => console.warn(w));
client.on("debug", (d) => console.info(d));

client.on("ready", () => {
  let foo = 420;
  goGlobal({
    foo,
    bar: 30
  });

  file.run();
});
