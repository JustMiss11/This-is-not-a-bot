const Discord = require('discord.js'),
      db = require('quick.db'),
      colors = require('../colors.json');

module.exports.run = async (server, message, args) => {
  
  if(args[0] == "prefix"){
    let prf = args.join(" ").slice(7);
    db.push(`inv_${message.guild.id}`, prf)
    if(!prf) return message.reply("You have to type any symbol to set prefix.");
  
    if(!message.member.hasPermissions("MANAGE_SERVER")) return message.channel.send("Not enought permissions!");
  
    var semb = new Discord.RichEmbed()
    .setAuthor("Succesful!")
    .setDescription(`You have succesfully changed server prefix to **\`${prf}\`**!`)
    .setColor("GREEN");
    message.channel.send(semb)
  }
  if(args[0] == "reports"){
        var channl = args.join(" ").slice(7);
        db.push(`repo_${message.guild.id}`, channl)
        if(!message.member.hasPermissions("MANAGE_SERVER")) return message.channel.send("Not enought permissions!");
        
        var emb = new Discord.RichEmbed()
        .setAuthor("Succesful!", message.author.avatarURL)
        .setColor("GREEN")
        .setDescription(`I have set reports channel for this guild to \`${channl}\`!`);
        message.channel.send(emb)
        return;
  }
}

module.exports.help = {
 "name": "set"
// "aliases": ['set-prf', 'prf', 'prefix']
}
