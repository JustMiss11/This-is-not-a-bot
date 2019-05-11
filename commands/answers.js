const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
   if(args[0] == "enable"){
      if(answ === 1){
            message.channel.send("You already enabled this.");
            return;
      }
      const answ = db.set(`answ_${message.guild.id}`, 1);
      
     // if(answ === 1){
       //     message.channel.send("You already enabled this.");
        //    return;
      //}
      message.channel.send("You have enabled general answers. (example: Whyy! Cuz your mom gay!)")
      return;
   }
   if(args[0] == "disable"){
         const answ = db.set(`asw_${message.guild.id}`, 0);
         message.channel.send("Turned off general answers");
   }
   if(answ === 1){
         if(message.content.startsWith("why") || message.content.startsWith("Why"))return message.reply("Cuz ur mom gay!");
   }
}

module.exports.help = {
  "name": "answers"
}
