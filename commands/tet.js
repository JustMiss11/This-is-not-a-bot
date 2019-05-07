const Discord = require('discord.js');

module.exports.run = async (server, message, args) => {
      let agr = args.join(" ");
      message.channel.send("Hmmmm wanna edit this to `hemmmm` " + agr).then(msg => {
            msg.react('👍').then(() => msg.react('👎'));

            const filter = (reaction, user) => {
                 return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

   message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      msg.edit('hemmmm' + agr);
		}
    if (reaction.emoji.name === '👎'){
			message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
		message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
	});
 })
}
module.exports.help = {
  "name": "tet"
}
//+_+
