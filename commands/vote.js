const Discord = require("discord.js")
const { Color } = ""
const { MessageButton } = require("discord-buttons");

module.exports = {
  name: "vote",
  aliases: ["v"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
   
 let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://top.gg/bot/807350534901071932/vote') 
  .setLabel('Vote Top.gg!')

return message.channel.send(`Thanks for voting for a Security Guild really it's very supportive of us`, butn);

  }
}