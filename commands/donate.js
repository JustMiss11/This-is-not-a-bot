const Discord = require("discord.js");
module.exports.run = async (server, message, args) => {
      var emb = new Discord.RichEmbed()
      .setAuthor("Donation", message.guild.iconURL)
      .addField("Patreon", "[Donate me tought patreon here](https://www.patreon.com/user?u=19614687)")
      .addField("PayPal", "enter gmail: `redsrafter@gmail.com` Im not very active on that gmail so dont try to send there random things.")
      .setColor("BLUE");
      message.channel.send("<a:LoadingS:579385925793087488>").then(async => {
           await message.author.send(emb);
      })
}// reload \\ // reload 2x \\
module.exports.help = {
  name: "donate"
}
