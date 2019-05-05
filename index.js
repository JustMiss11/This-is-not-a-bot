const Discord = require('discord.js'),
      discord = require('discord.js'),
      disc = require('discord.js'),
      Disc = require('discord.js'),
      fs = require('fs'),
      db = require('quick.db'),
      colors = require('./colors.json');
      
const server = new Discord.Client();

const bname = server.username,
      bid = server.id;

server.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./commands/${ f }`);
        props.fileName = f;
        server.commands.set(props.help.name, props);
        
    });
});

//let c = console;

server.on("ready", () => {
      console.log(server.user.username)
      console.log(`is in ${server.guilds.size} servers`)
      console.log(`with ${server.users.size} users`)
      console.log(`${server.user.username} is online!`)
      console.log("---------------------------------")
      console.log("Made by JustNela (FEDE)");
      
      let statuses = [
          `to ${server.guilds.size} servers!`, //shows in how many servers I am!
          "my prefix is +", //my Prefix!
          "start with +help", //simple help!
          "Version: 0.0.1!", //Bots version!
          `over ${server.users.size} users!` //shows how many users im managing!
       ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        server.user.setActivity(status, {type: "WATCHING"});
        server.user.setStatus("idle"); //online, idle, dnd
    }, 5000)
})


   
      


server.on("message", async (message, msg) => { //reload;
      
      
      let pref = db.fetch(`inv_${message.guild.id}`);             // prf = "+";
     // if(!pref) pref = "+";
      
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      
      
      if(!message.content.startsWith(`${pref ? `${pref}` : '+'}`)) return;
      if(message.author.server) return;  
      if(message.isMentioned(server.user)){
            message.reply("My prefix is `" + `${pref ? `${pref}` : '+'}` + "`");
      }
            
      //if(!message.content.startsWith(prf)) return;
      if(message.channel.type === "dm") return server.channels.get("571024698209599488").send(`User **${message.author.username} DMed me this: \`${message.content}\``);
      
      let commandfile = server.commands.get(cmd.slice(`${pref ? `${pref}` : '+'}`.length));
      if(commandfile) commandfile.run(server,message,args);

      if(message.content.startsWith("https://www.discord.gg") || message.content.startsWith("https://www.discord.me"))return message.delete() && message.reply("Dont poste discord links here!");
          //  message.delete()//.then(() => {
              // message.reply(`Dont poste any links here!`)
            //message.delete()
            
           // })
          //  return;
   //   }
      //  message.reply("It wont work in DM's dummy..") && server.channels.get("571024698209599488").send({embed:{
               // "author": {
              //   /"name": "Someone DMed to me"
              //  },
              //  "fields": [
                //  )){
                     //   "name": "User:",
                  //      "value": message.author.username
                 // },
                  //{
                //        "name": "ID",
                //        "value": message.author.id
               //   },
                //  {
                 //       "name": "content",
                  //      "value": message.content
               //   }
             //   ],
              //  "color": 0x36393f
         // }}) 
    //  };
      
     // if(!message.content.startsWith(prf)) return;
      
      //if(cmd === `${prf}help`){
            //var emb = new disc.RichEmbed()
           // .setTitle("This is not a help")
           // .setColor("0x36393f")
           // .setTimestamp()
           // .addField("say", "Say command will say what you want to say xd")
          //  .setDescription("`help` - Viewing.");
           // message.channel.send(emb)
           // return;
     // }
      //if(cmd === `${prf}say`){
            //message.channel.send(args.join(" "));
           // return;
      //}
})

server.login("NTcxMDA5NjIxOTE0MDI1OTk0.XMHgMg.xj6PJkhNLUcbMHIKAf02diLzsg0");
