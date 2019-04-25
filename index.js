const Discord = require('discord.js'),
      discord = require('discord.js'),
      disc = require('discord.js'),
      Disc = require('discord.js');
      
const This = new Discord.Client();

//let c = console;

This.on("ready", () => {
      console.log(This.user.username)
      console.log(`is in ${This.guilds.size} servers`)
      console.log(`with ${This.users.size} users`)
      console.log(`${This.user.username} is online!`)
      console.log("---------------------------------")
      console.log("Made by JustNela (FEDE)");
})

This.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
