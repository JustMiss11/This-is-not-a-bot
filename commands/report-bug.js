const disc = require('discord.js');
const colors = require('../colors.json');

module.exports.run = async (server, message, args) => {

  var user = message.author;
  var bug = args.join(" ");
  if(!bug) return message.reply("Specify a bug!");
  
  var remb = new disc.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle("Reported bug")
  .addField("User reporting bug:", user)
  .addField("Bug:", bug)
  .setColor(colors.disc);
  message.channel.send("Succesful!")
  server.channels.get('572892675553099801').send(remb).then(msg => {
    msg.react('✅').then(() => msg.react('❌'));

            const filter = (reaction, user) => {
                 return ['✅', '❌'].includes(reaction.emoji.name); //&& user.id === message.author.id;
            };

   message.awaitReactions(filter, { max: 1, time: 6000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
      msg.edit({embed: {
        "author": "Bug will be repaired in shortest time.",
        "color": 0x36393f,
        
      }});
		}
    if (reaction.emoji.name === '❌'){
      msg.edit("Bug have been already repaired/is not a bug.");
		}
	})
	.catch(collected => {
		console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
		message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
	});
  })
  return;
  
}


module.exports.help = {
  "name": "bug",
  "aliases": ['rb']
}
