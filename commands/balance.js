const Discord = require('discord.js'),
      db = require('quick.db');
      
module.exports.run = async (server, message, args) => {
      const balance = db.fetch(`bal_${message.author.id}`);
      if(balance === null) balance = 0;
      
      
      var bemb = Discord.RichEmbed()
      .setAuthor("Your Balance", message.author.avatarURL)
      .setColor("0xE99C38")
      .addField("BETA", "-BETA TESTING-")
      .addField("Balance:", `€${balance}`);
      message.channel.send(bemb);
      return;
}
module.exports.help = {
  name: "balance"
}
