const discord = require('discord.js');

module.exports.run = async (server, message, args) => {
  var emb = new discord.RichEmbed()
  .setTitle("This is not a help")
  .setColor("0x36393f")
  .setTimestamp()
  .addField("say", "Say command will say what you want to say xd")
  .addField("set", "```prefix <prefix> \nreports <channel> \nstatus <status>```")
  .addField("report-bug", "Reports bug to the support server")
  .addField("icon", "Shows server icon for 5 seconds.")
  .addField("support", "Gives invite to support server.")
  .addField("profile", "Shows your profile")
  .addField("buy", "Buy something from our shop.")
  .addField("donate", "Donate the bot owner")
  .setDescription("`help` - Viewing.");
 
  
 
  message.channel.send(emb)
  return;
}
module.exports.help = {
  name: "help",
  aliases: ['h', 'halp']
}
