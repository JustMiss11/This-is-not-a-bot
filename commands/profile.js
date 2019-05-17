const Discord = require('discord.js'),
      db = require('quick.db');

module.exports.run = async (server, message, args) => {
      
      let user = message.mentions.members.first() || message.author;
      let hugs = await db.fetch(`hugsG_${message.author.id}`);
      let Hugs = await db.fetch(`hugsT_${message.author.id}`);
      let badge = await db.fetch(`badges_${user.id}`);
      var userB = await db.fetch(`userBalance_${user.id}`);
      var stat = await db.fetch(`status_${user.id}`);
      if(userB === null) userB = 0;
      
      if(message.author.id === "342364288310312970"){
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Badges:", `<:Developer:578996439573594113> <:Administrator:578996440408391723> <:Moderator:578996439682646016> ${badge ? `${badge}` : ''}`)
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status set it by \`+set status\`)'}`, true)
                    //  ", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`, true)
            .addField("Balance:", `€${userB}`, true)
            .addField("Hugs given:", `${hugs ? `${hugs}` : '0'}`)
            .addField("Hugs took:", `${Hugs ? `${Hugs}` : '0'}`);
            message.channel.send(emb)
            return;
      }
      if(message.author.id === "224976332046467072"){
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Badges:", `<:Administrator:578996440408391723> <:Moderator:578996439682646016> ${badge ? `${badge}` : ''}`)
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status set it by \`+set status\`)'}`, true)
                    //  ", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`, true)
            .addField("Balance:", `€${userB}`, true)
            .addField("Hugs given:", `${hugs ? `${hugs}` : '0'}`)
            .addField("Hugs took:", `${Hugs ? `${Hugs}` : '0'}`);
            message.channel.send(emb)
            return;
      }
      if(message.author.id === "442299138655387654"){
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Badges:", `<:Administrator:578996440408391723> <:Moderator:578996439682646016> ${badge ? `${badge}` : ''}`)
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status set it by \`+set status\`)'}`, true)
                    //  ", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`, true)
            .addField("Balance:", `€${userB}`, true)
            .addField("Hugs given:", `${hugs ? `${hugs}` : '0'}`)
            .addField("Hugs took:", `${Hugs ? `${Hugs}` : '0'}`);
            message.channel.send(emb)
            return;
      }
      if(message.author.id === "522048274689949712"){
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Badges:", `<:Administrator:578996440408391723> <:Moderator:578996439682646016> ${badge ? `${badge}` : ''}`)
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status set it by \`+set status\`)'}`, true)
                    //  ", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`, true)
            .addField("Balance:", `€${userB}`, true)
            .addField("Hugs given:", `${hugs ? `${hugs}` : '0'}`)
            .addField("Hugs took:", `${Hugs ? `${Hugs}` : '0'}`);
            message.channel.send(emb)
            return;
      }
      //if(user.id !== message.author.id){
          //  var emb = new Discord.RichEmbed()
           // .setAuthor(`${user.username}'s profile.`)
           // .setColor("BLUE")
            
            //.addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status'}`, true)
          //  .addField("Balance:", `€${userB}`, true);
           // message.channel.send(emb)
           // return;
    /*  }else{*/
            var emb = new Discord.RichEmbed()
            .setAuthor("You'r profile")
            .setColor("BLUE")
            .addField("Badges:", `${badge ? `${badge}` : 'You dont have any badges.'}`)
            .addField("Status:", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status set it by \`+set status\`)'}`, true)
                    //  ", `${stat ? `${stat}` : 'I dont want you to see this :) (This is default status)'}`, true)
            .addField("Balance:", `€${userB}`, true)
            .addField("Hugs given:", `${hugs ? `${hugs}` : '0'}`)
            .addField("Hugs took:", `${Hugs ? `${Hugs}` : '0'}`);
            message.channel.send(emb)
            return;
      //}
}
module.exports.help = {
  "name": "profile"
}
