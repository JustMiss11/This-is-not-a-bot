const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
      let user = message.mentions.members.first() || message.author;
      var userB = await db.fetch(`userBalance_${user.id}`);
      var stat = await db.fetch(`status_${user.id}`);
      if(userB === null) userB = 0;
      
      
      if(user.id !== message.author.id){
            var emb = new Discord.RichEmbed()
            .setAuthor(`${user.username}'s profile.`)
            .setColor("BLUE")
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status'}`)
            .addField("Balance:", `€${userB}`);
            message.channel.send(emb)
            return;
      }else{
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`
            .addField("Balance:", `€${userB}`, true);
            message.channel.send(emb)
            return;
      }
}
module.exports.help = {
  "name": "profile"
}
