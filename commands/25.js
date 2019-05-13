const Discord = require('discord.js'),
      db = require('quick.db');
module.exports.run = async (server, message, args) => {
      db.add(`userBalance_${message.author.id}`, 25);
      
      var emb = new Discord.RichEmbed()
      .setAuthor("Succes")
      .setDescription("Succesfully added 25€ to you'r account.")
      .setColor("GREEN");
      message.channel.send(emb)
      return;
}
module.exports.help = {
  name: "25"
}
