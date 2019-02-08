module.exports.run = (bot, message, args, Discord) {
let em = new Discord.RichEmbed()
.setTitle("Help menu.")
.setDescription("Here are my commands.")
.addField("Help", "Shows this menu.")
message.channel.send({embed: em})
}
module.exports.help = {
"name": "help"
}
