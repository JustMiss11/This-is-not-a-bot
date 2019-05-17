const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
      let bal = db.fetch(`userBalance_${message.author.id}`);
      if(args[0] == "badge"){
      
            if(args[1] == "nitro"){
               if(bal <= 5000){
                     message.channel.send("Not enought money to purchase this")
                     return;
               }else{
               
                     db.subtract(`userBalance_${message.author.id}`, 5000)
                     db.push(`badges_€{message.author.id}`, <:nitro:578957860843814912>)
                     var embed = new Discord.RichEmbed()
                     .setAuthor("Successfully bought Nitro badge!")
               
                     .setColor("GREEN")
                     .setDescription("Now you have Nitro Badge in your profile!");
                     message.channel.send(embed)
                     return;
              }
            }
      }
}
module.exports.help = {
  "name": "buy"
}
