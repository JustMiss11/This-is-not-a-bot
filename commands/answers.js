const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
   if(args[0] == "enable"){
      const answ = db.set(`answ_${message.guild.id}`, 1);
      message.channel.send("You have enabled general answers. (example: Whyy! Cuz your mom gay!)")
   }
}

module.exports.help = {
  "name": "answers"
}
