const Discord = require('discord.js');
const colors = require('../colors.json');

module.exports.run = async (server, message, args) => {
  if(message.author.id !== "342364288310312970"){
    message.channel.send("Preparing.");
  }else{
    message.channel.send({embed: {
      "color": colors.disc,
      "description": "[Join now!](https://discord.gg/n9U6nAH)"
    }})
  }
}

module.exports.help = {
  "name": "support"
}
