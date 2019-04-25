const Discord = require('discord.js'),
      discord = require('discord.js'),
      disc = require('discord.js'),
      Disc = require('discord.js');
      
const not = new Discord.Client();

not.on("ready", () => {
      not.log(not.user.username)
      not.log(`is in ${not.guilds.size} servers`)
      not.log(`with ${not.users.size} users`)
      not.log(`${not.user.username} is online!`)
      not.log("---------------------------------")
      not.log("Made by JustNela (FEDE)");
})

not.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
