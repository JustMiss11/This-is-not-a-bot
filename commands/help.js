const discord = require('discord.js');

module.exports.run = async (server, message, args) => {
  var emb = new discord.RichEmbed()
  .setTitle("This is not a help")
  .setColor("0x36393f")
  .setTimestamp()
  .addField("say", "Say command will say what you want to say xd")
  .addField("set-prefix", "Sets bots prefix. (needs to be set every update due to hosting. & can be used by admins)")
  .addField("report-bug", "Reports bug to the support server")
  .setDescription("`help` - Viewing.");
  message.channel.send(emb)
  return;
}
module.exports.help = {
  name: "help"
}
