const Discord = require('discord.js');
const colors = require('../colors.json');

module.exports.run = async (server, message, args) => {
  var icon = message.guild.iconURL;
  
  var emb = new Discord.RichEmbed()
  .setImage(icon)
  .setColor(colors.disc)
  .setTitle("Server Icon");
  message.channel.send(emb).then(m => m.delete(6000));
}
module.exports.help = {
  "name": "icon"
}
