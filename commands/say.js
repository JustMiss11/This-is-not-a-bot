const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.channel.send(args.join(" "));
    return;
}
module.exports.help = {
    name: "say",
    aliases: []
}
