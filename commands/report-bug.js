const disc = require('discord.js');
const colors = require('../colors.json');

module.exports.run = async (server, message, args) => {

  var user = message.author;
  var bug = args.join(" ");
  if(!bug) return message.reply("Specify a bug!");
  
  var remb = new disc.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Reported bug")
  .addField("User reporting bug:", user)
  .addField("Bug:", reason)
  .setColor(colors.disc);
  server.channels.get('572892675553099801').send(remb);
  return;
  
}


module.exports.help = {
  "name": "bug"
}