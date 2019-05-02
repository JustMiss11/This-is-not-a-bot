const Discord = require('discord.js');

module.exports.run = (server, message, args) => {
  let cont = message.mentions.users.first();
  const filter = m => m.author.id === message.author.id;
  message.reply("Please tag a user to test... Will expire in 10 seconds...").then(q => q.delete(10000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    collected.delete(15000);
    if (collected.first().content === 'cancel') {
      return message.reply("Canceled.");
    }
    message.channel.send(`<@${cont.id}>`)
  }).catch(err => {
    message.reply("Cancelled...").then(r => r.delete(5000));
    message.channel.send("Time exceeded. Message await cancelled.").then(w => w.delete(5000));
  });
}
module.exports.help = {
  name: "test"
}
