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


   
      


This.on("message", async (message, msg) => {
      let prf = "+";
      let messageArray = message.content.split(" "),
          cmd = messageArray[0],
          args = messageArray.slice(1);
      
      if(!message.content.startsWith(prf)) return;
      if(message.author.This) return;  
      if(message.isMentioned(This.user)){
            message.reply("My prefix is `" + prf + "`");
      }
            
      //if(!message.content.startsWith(prf)) return;
      if(message.channel.type === "dm") return; {
            message.reply("It wont work in DM's dummy..") && This.channels.get("571024698209599488").send({embed:{
                "author": {
                  "name": "Someone DMed to me"
                },
                "fields": [
                  {
                        "name": "User:",
                        "value": message.author.username
                  },
                  {
                        "name": "ID",
                        "value": message.author.id
                  },
                  {
                        "name": "content",
                        "value": message.content
                  }
                ],
                "color": 0x36393f
          }})
      };
      
     // if(!message.content.startsWith(prf)) return;
      
      if(cmd === `${prf}help`){
            var emb = new disc.RichEmbed()
            .setTitle("This is not a help")
            .setColor("0x36393f")
            .setTimestamp()
            .setDescription("`help` - Viewing.");
            message.channel.send(emb)
            return;
      }
})

This.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
