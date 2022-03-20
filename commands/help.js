const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = ""
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let help = new Discord.MessageEmbed()
    .setColor("#2a00ff")
    .setAuthor("• Security Server is a Secured Bot that can protect your Server's Privacy and Safety + From getting Hacked. And it's Available for Free! You can get information about it here bot And Safe Guild!")
    .setImage(Image)
    .setDescription(`• You can get information about it here bot`)
    .addField("General Section", "`invite`, `support`, `vote`, `stats`, `serverinfo`, `userinfo`")
    .addField("Moderation Section", "`kick`, `ban`, `mute`, `unmute`, `clear`, `unbanall`, `lock`, `unlock`, `lockall`, `unlockall`, `nick`, `addrole`, `removerole`")
    .addField("")
    .addField("Security Section", "`settings`, `anti`, `logs`")
    .setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot%20applications.commands') 
       .setEmoji(`✔️`)
       .setLabel('Invite')

      let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://top.gg/bot/807350534901071932/vote') 
       .setEmoji(`🗳️`)
       .setLabel('Vote')
    
      let button3 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/AR7hKUAB5w') 
       .setEmoji(`💢`)
       .setLabel('Support')
     
      let row1 = new MessageActionRow()
      .addComponents(button1, button2, button3)

   return message.channel.send(help,row1);
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "🔴 Disabled"
        if ( command.enabled ) {
        ccmd = "🟢 Enabled"
        }
      let help1 = new Discord.MessageEmbed()
     .setColor(Color) 
     .setThumbnail(message.author.avatarURL())
     .setTitle("**Help**")
     .setDescription(command.description || command.name + " this command don't have a description")
     .addField("**Usage**", "" + command.usage.join(", ") + "" )
     .addField("**Category**", "" + command.category.join(", ") + "" )
     .addField("**Command is**", ccmd);
      message.channel.send(help1)
        }
    }
  }};