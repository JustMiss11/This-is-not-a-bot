const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
      
      
      let c = db.fetch(`repo_${message.guild.id}`);
      
      var rUser = message.mentions.members.first();
      if(!rUser) return message.reply("Please mention a user");
      let reason = args.join(" ").slice(22);
      if(!reason) reason = "User has been reported for breaking rules.. Idk ask moderator to tell reason.";
      let author = message.author.tag;
      let rC = message.guild.channels.find('name', `${c ? `${c}` : 'reports'}`) || message.guild.channels.find('id', `${c ? `{c}` : '000000'}`);
      
      var remb = new Discord.RichEmbed()
      .setAuthor("New report")
      .setColor("RED")
      .addField("User reporting:", author)
      .addField("User reported:", rUser)
      .addField("Reason:", reason);
      rC.send(remb);
      return;
}
module.exports.help = {
  "name": "report"
}
