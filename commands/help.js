const discord = require('discord.js');

module.exports.run = async (server, message, args) => {
  var emb = new disc.RichEmbed()
            .setTitle("This is not a help")
            .setColor("0x36393f")
            .setTimestamp()
            .addField("say", "Say command will say what you want to say xd")
            .setDescription("`help` - Viewing.");
            message.channel.send(emb)
            return;
}
module.exports.help = {
  name: "help"
}
