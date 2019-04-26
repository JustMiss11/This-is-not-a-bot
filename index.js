const Discord = require('discord.js'),
      discord = require('discord.js'),
      disc = require('discord.js'),
      Disc = require('discord.js');
      
const server = new Discord.Client();

const bname = server.username,
      bid = server.id;
    

//let c = console;

server.on("ready", () => {
      console.log(server.user.username)
      console.log(`is in ${server.guilds.size} servers`)
      console.log(`with ${server.users.size} users`)
      console.log(`${server.user.username} is online!`)
      console.log("---------------------------------")
      console.log("Made by JustNela (FEDE)");
})


   
      


server.on("message", async (message, msg) => {
      let prf = "+";
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      
      if(!message.content.startsWith(prf)) return;
      if(message.author.server) return;  
      if(message.isMentioned(server.user)){
            message.reply("My prefix is `" + prf + "`");
      }
            
      //if(!message.content.startsWith(prf)) return;
      if(!message.guild.channel) return; {
            message.reply("It wont work in DM's dummy..") && server.channels.get("571024698209599488").send({embed:{
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

server.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
