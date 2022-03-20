const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../config.js");

module.exports = {
  name: "anti",
  aliases: ["config"],
  description: "To show command limits the bot",
  usage: ["s!anti"],
  category: ["Security"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
  const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle("List of all commands security")
      .setDescription(`Type: [on,off,<number>]\n\n🛡️ **antichannelD, antichannelC, antiroleD, antiroleC, antiban, antikick, antibot [on/off], antiwebhook [on/off], antiemoji [on/off]**`)
  message.channel.send(embed);
    }
}