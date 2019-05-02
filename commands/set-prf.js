const Discord = require('discord.js'),
      db = require('quick.db'),
      colors = require('../colors.json');

module.exports.run = async (server, message, args) => {
  
  let prf = args.join(" ");
  db.push(`inv_${message.guild.id}`, prf)
  if(!prf) return message.reply("You have to set a prefix.");
  
  if(!message.member.hasPermissions("MANAGE_SERVER")) return message.channel.send("Not enought permissions!");
  
  var semb = new Discord.RichEmbed()
  .setAuthor("Succesful!")
  .setDescription(`You have succesfully changed server prefix to **\`${prf}\`**!`)
  .setColor("GREEN");
  message.channel.send(semb)
  
}

module.exports.help = {
 "name": "set-prefix",
 "aliases": ['set-prf', 'prf', 'prefix']
}
