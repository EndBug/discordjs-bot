/**
 *  @author Federico Grandi <fgrandi30@gmail.com>
 *  @see {@link https://endbug.gitbooks.io/discord-bot-101-discord-js}
 */

const Discord = require("discord.js");
const client = new Discord.Client();
const guild = client.guilds.get(config.guild_id);

const config = require("./config.json");

client.login(config.token);

client.on("error", (e) => console.error(e));
client.on("warn", (w) => console.warn(w));
client.on("debug", (d) => console.info(d));

client.on("ready", () => {
  var role = guild.roles.get(config.roles.myroles);

  function getRank(member) {
    if (member.roles != undefined) {
      let rank = null;
      for (let id of member.roles.keyArray()) {
        if (id == role.id) rank = 1;
      }
      return rank;
    }
    return false;
  }

  if (getRank(guild.members.random()) > 0) console.log("Hey, this example shows that the rank is greater than 0.");
  else console.log("Nope, the member doesn't have the role.");
});
