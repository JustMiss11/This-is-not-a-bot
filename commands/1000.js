const Discord = require('discord.js'),
      db = require('quick.db');
module.exports.run = async (server, message, args) => {
      db.add(`userBalance_${message.author.id}`, 1000);
      
      var emb = new Discord.RichEmbed()
      .setAuthor("Succes")
      .setDescription("Succesfully added 1000€ to you'r account.")
      .setColor("GREEN");
      message.channel.send(emb)
      return;
}
module.exports.help = {
  name: "1000"
}
