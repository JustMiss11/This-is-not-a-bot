const Discord = require('discord.js'),
      db = require('quick.db');
      
module.exports.run = async (server, message, args) => {
      var a1 = args.join(" ");
      db.push(`a_${message.guild.id}`, a1}
      var a2 = args.join(" ");
}

module.exports.help = {
  "name": "apply"
}
