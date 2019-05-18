const Discord = require('discord.js'),
      db = require('quick.db');
module.exports.run = async (server, message, args) => {
      var user = message.mentions.members.first();
      if(!user) return message.reply("is alone he/she wants some hug :)");
      if(user.id === message.author.id) return message.reply("is feeling alone he/she wants some hugs ;)");
      db.add(`hugsG_${message.author.id}`, 1)
      db.add(`hugsT_${user.id}`, 1)
      var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("GREEN")
      .addField(`Hugged`, `<@${user.id}>`)
      .addField("Its a nice moment :)", "Cuz everyone want hug!");
      message.channel.send(embed);
      return;
}
module.exports.help = {
      "name": "hug"
}
