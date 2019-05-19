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
                     db.push(`badges_${message.author.id}`, '<:nitro:578957860843814912>')
                     var embed = new Discord.RichEmbed()
                     .setAuthor("Successfully bought Nitro badge!")
               
                     .setColor("GREEN")
                     .setDescription("Now you have Nitro Badge in your profile!");
                     message.channel.send(embed)
                     return;
              }
           // if(args[1] == "valentine"){
                  
          //  }
            }
            if(args[1] == "valent"){
                  var emb = new Discord.RichEmbed()
                  .setAuthor("Valentine badge")
                  .addField("How to get:", "Earn it when Valentine event is on")
                  .setColor("BLUE");
                  message.channel.send(emb)
                  return;
            }
            var emb = new Discord.RichEmbed()
            .setAuthor("Badges for you to buy!")
            .setColor("BLUE")
            .setDescription("<:nitro:578957860843814912> - nitro\n`+buy badge nitro`\nCost: `5000` \n<:heartbadge:579669682152538112> - valentine badge \nCost: None");
            message.channel.send(emb)
            return;
      }
      var emb = new Discord.RichEmbed()
      .setAuthor("Here is list of categories.")
      .setColor("0x36393f")
      .setDescription("__badge__ \nShows list of badges you can get.");
      message.channel.send(emb);
      return;
}
module.exports.help = {
  "name": "buy"
}
//
