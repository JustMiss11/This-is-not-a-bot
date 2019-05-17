const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
      let user = message.mentions.members.first() || message.author;
      var userB = await db.fetch(`userBalance_${user.id}`);
      if(userB === null) userB = 0;
      
      if(user.id !== message.author.id){
            var emb = new Discord.RichEmbed()
            .setAuthor(`{user.username}'s profile.`)
            .setColor("BLUE")
            .addField("Balance:", `€{userB}`);
            message.channel.send(emb)
            return;
      }else{
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Balance:", `€${userB}`);
            message.channel.send(emb)
            return;
      }
}
module.exports.help = {
  "name": "profile"
}
