const Discord = require('discord.js'),
      discord = require('discord.js'),
      disc = require('discord.js'),
      Disc = require('discord.js');
      
const this = new Discord.Client();

this.on("ready", () => {
      this.log(this.user.username)
      this.log(`is in ${this.guilds.size} servers`)
      this.log(`with ${this.users.size} users`)
      this.log(`${this.user.username} is online!`);
})

this.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
