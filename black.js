
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");


client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e);
  }
});



const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s!";
const col = "#2a00ff"
client.login(process.env.TOKEN);
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${prefix}help | Servers: ${client.guilds.cache.size}`, { type: "COMPETING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});
let users = JSON.parse(fs.readFileSync('./users.json' , 'utf8'));
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild)
      return message.reply(`This is command only server❌`);
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds
        .get(message.guild.id)
        .members.get(message.author.id);
      let personalInvites = invs.filter(
        i => i.inviter.id === message.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require("moment");
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
        let args1 = message.content.split(" ")[1];
  let mention = message.mentions.users.first()|| message.author || message.guild.members.cache.get(args1)
      var heg;
      if (men) {
        heg = men;
      } else {
        heg = message.author;
      }
      var mentionned = message.mentions.members.first();
      var h;
      if (mentionned) {
        h = mentionned;
      } else {
        h = message.member;
      }
      moment.locale("ar-TN");
      //  users[message.author.id]
 
client.on("voiceStateUpdate", (oldMember, newMember) => {
    if(!newMember.voiceChannel) {
        users[message.author.id] = {
            time: (new Date).getTime()
    }
        }
       fs.writeFile('users.json', JSON.stringify(users), (err) => {
if (err) console.error(err);
})
});   
 
var last;
if(!users[message.author.id]) {
if(message.member.voiceChannel) last = `Last See In Voice: \`${message.member.voiceChannel.name}\``;
else last = `  Never Join Any Room`;
} else last =  Math.floor(((new Date).getTime() - users[message.author.id].time) / 1000 / 60 / 60) + " Hours, " + Math.floor(((new Date).getTime() - users[message.author.id].time) / 1000 / 60 ) + " Minutes, " +  Math.floor(((new Date).getTime() - users[message.author.id].time) / 1000) + " Seconds"
 
      var id = new MessageEmbed()
      .setThumbnail(message.author.avatarURL)
        .setColor(col)
        .addField(
          "Time joined discord",
          `${moment(heg.createdTimestamp).format(
            "YYYY/M/D HH:mm:ss"
          )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
          true
        )
        .addField(
          "Time joined server",
          `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
            h.joinedAt
          ).fromNow()}\``,
          true
        )
      .addField("Last voice",` ${last}`)
        .addField("Invite count", inviteCount, false)
            .setFooter(`${mention.tag}`, 'https://cdn.discordapp.com/attachments/705295880215068722/719010959691219005/ID_symbol_B-W_128x128.gif');
 
      message.channel.send(id);
    });
  }
});



const { disbut, MessageMenuOption, MessageMenu } = require('discord-buttons');
///disbut(client)


//////////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.MessageEmbed()
      .setColor(col)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.guild.iconURL)
    
      .setDescription(`
      
  

**Security Command**

 \`anti ban [Number]\`
 \`anti kick [Number]\`
 
 \`anti channelC [Number]\`
 \`anti channelD [Number]\`
 
 \`anti roleC [Number]\`
 \`anti roleD [Number]\`
 
 
 \`anti bot [on / off]\`
 \`anti emoji [on / off]\`
 \`anti webhook [on / off]\`
 \`settings\`

**Public Command**
\`bot\`, \`server\`, \`ping\`, \`user\`, \`stats\`

**Moderation Command**
\`ban\`, \`kick\`, \`mute\`, \`unmute\`, \`bans\`, \`say\`, \`unban[userid/all]\`




`);
    
    const vote = new disbut.MessageButton()
.setLabel('Vote')
.setStyle('url')
.setEmoji('✨')
.setURL('https://top.gg/bot/807350534901071932/vote');

const invite = new disbut.MessageButton()
.setLabel('Invite')
.setStyle('url')
.setEmoji('🔗')
.setURL('https://discord.com/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot%20applications.commands');


const support = new disbut.MessageButton()
.setLabel('Support')
.setStyle('url')
.setEmoji('🗳')
.setURL('https://discord.gg/AR7hKUAB5w');

    
  /*  
const website = new disbut.MessageButton()
.setLabel('Website')
.setStyle('url')
.setEmoji('905888428594429973')
.setURL('https://security-bot1-1.junger.repl.co/');

*/
    
    
 /*   
const trash = new disbut.MessageButton()
.setLabel('Delete')
.setID('delete')
.setEmoji('🚫')
.setStyle('red')
 message.react("<a:797855362694774804:891459284183941170>");
*/
const me = await message.channel.send(help,{buttons : [  support, invite, vote ]})


 const filter = async(btn) => btn.clicker.user.id == message.member.id
                const collector = me.createButtonCollector(filter)

        collector.on("collect", async(button) => {
                     button.reply.defer()
                     if(button.id === "delete") {
                       me.delete().then(()=> message.delete())
                     }
                })

         

  } 
}); 

//
//////
  
client.on('message', message => {
  if(message.content.startsWith(`s!invite`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Invite")
    ///.setURL(``)
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor(col)
    
    const inv = new disbut.MessageButton()
.setLabel('Invite')
.setStyle('url')
.setEmoji('954297751053692948')
.setURL('https://discord.com/oauth2/authorize?client_id=807350534901071932&permissions=8&scope=bot%20applications.commands');

    message.channel.send(embed, {buttons :[inv]})
  }
});

////////

/*
let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id){
      let embeeed = new Discord.MessageEmbed()
      .setTitle("Error")
      .setDescription("**JUST FOR ONWER SHIP**")
      .setColor("RED");
      return message.channel.send(embeeed);
    }
    {
      let black = new Discord.MessageEmbed()
      .setTitle("Error")
      .setDescription("**SEND NUMBER**")
      .setColor("RED");
 
      { let black2 = new Discord.MessageEmbed()
      .setTitle("Error")
      .setDescription("**JUST SEND NUMBER*")
      .setColor("RED");
 
      if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].banLimit = num
       { let banLimit1 = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Ban Changed to : **${config[message.guild.id].banLimit}**`)
      .setColor(col);
        message.channel.send(banLimit1);}
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].kickLimits = num
      let embedddd = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Kick Changed to : **${config[message.guild.id].kickLimits}**`)
      .setColor(col);
      message.channel.send(embedddd);
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].roleDelLimit = num
      let embeddddddddd = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Role Delete Changed to : **${config[message.guild.id].roleDelLimit}**`)
      .setColor(col);
      message.channel.send(embeddddddddd);
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].roleCrLimits = num
      let embeed = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Role Create Changed to : **${config[message.guild.id].roleCrLimits}**`)
      .setColor(col);
      message.channel.send(embeed);
 
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].chaDelLimit = num
            let embeeed = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Channel Delete Changed to : **${config[message.guild.id].chaDelLimit}**`)
      .setColor(col);
      message.channel.send(embeeed);
 
 
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].chaCrLimit = num
      let embd = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Channel Create Changed to : **${config[message.guild.id].chaCrLimit}**`)
      .setColor(col);
      message.channel.send(embd);
 
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send(black);
      if (isNaN(num)) return message.channel.send(black2);
      config[message.guild.id].time = num
            let emb = new Discord.MessageEmbed()
      .setTitle("Data Security ↓")
      .setDescription(`Anti Time Changed to : **${config[message.guild.id].time}**`)
      .setColor(col);
      message.channel.send(emb);
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
    }}
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
 
      channel.guild.members
        .cache.get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Has delete channel **`
             )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
 
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("ㅤ");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Has created channels**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Has delet roles**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .cache.get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${entry.username} Has created roles **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .cache.get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**${entry.username} Has ban Many member**`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 1,
      chaDelLimit: 1,
      chaCrLimit: 1,
      roleDelLimit: 1,
      kickLimits: 1,
      roleCrLimits: 1,
      time: 10
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**${entry.username} Has kick Many member **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 1,
        chaDelLimit: 1,
        chaCrLimit: 1,
        roleDelLimit: 1,
        kickLimits: 1,
        roleCrLimits: 1,
        time: 10
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${entry.username} Has kick Many member**`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
 
      

    



*/

  
      

/////


////////




///////

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot`)) {
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())

      .setColor(col)
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**Ping Bot**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Name Bot**", `[ ${client.user.tag} ]`, true)
      .addField("**ID Bot**", `[ ${client.user.id} ]`, true)
      .addField("**Prefix Bot**", `[ ${prefix} ]`, true)
      .addField("**Bot Language**", `[ Java Script ]`, true)
      .setFooter("Security Server");

    message.channel.send(tnx);
  }
});

////////

///////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members**");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
         `**Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == "count")
    message.reply(`**${message.guild.memberCount}**`);
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

////////



/////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});

////////




//////////////mute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

//////////


////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});

////////avatar

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "avatar") {
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    );
  }
});

////////
client.on('message', async message => {
    if(message.content.includes('@everyone','@here',)){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.cache.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.MessageEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : Type everyone and here**`)
    .setColor(col)
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL())
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})
client.on('message', async message => {
    if(message.content.includes('ker','maza','qn','qwz')){ 
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.cache.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "Muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.MessageEmbed()
.setTitle("Muted Ads")
    .addField(`**  You Have Been Muted **` , `**Reason : BAD WORD**`)
    .setColor(col)
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL())
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)


}
})



client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField(" ⚠️| **Server Name:**", `${prof.guild.name}`)
      .addField(" 👑| **Owner Server:**", `${prof.guild.owner}`)
      .addField(" 🔰| **Server ID:**", `${prof.guild.id}`)
      .addField(" ✅| **Created:**", `${prof.guild.createdAt.toLocaleString()}`)
      .addField(" 🚦| **Members:**", `${prof.guild.memberCount}`)
      .addField(" 🔳| **Channels:**", `${prof.guild.channels.cache.size}`)
      .addField(" 🌐| **Region**:", `${prof.guild.region}`)
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

//////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

///////

client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support]()`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor(col);
    message.author.send(embed);
    message.react("");
  }
});


var antibots = (fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
////////
/*
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiBot On")
      .setDescription(`The AntiBots Join Is On ✅`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
/////
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiBot Off")
      .setDescription(
        `The AntiBots Join Is Off `
      )
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});
fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

*/
///////

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("954290872869093396");
  let embed = new MessageEmbed()
  .setColor("RED")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌😭 Kicked me in this Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


////LEFT SERVER Work
client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("954290872869093396");
  let embed = new MessageEmbed().setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✔️ Join Server`)
  .addField(" **Server Name**", `${guild.name}`)
  .addField(" **Server Owner**", `${guild.owner}`)
  .addField(" **Server Id**", `${guild.id}`)
  .addField(" **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


/////OIN SERVER Work

const { channelCheck, kickCheck, emojiDeleteCheck, roleCheck, banCheck, channelCreate, emojiCreateCheck, channelUpdateCheck }  = require('./Functions')
const Enmap = require('enmap')

client.antinuke = new Enmap({name:"antinuke", ensureProps:true})
client.antiraid = new Enmap({name:"antiraid", ensureProps:true})
client.commands = new Discord.Collection()


client.on('emojiDelete', (emoji) => {


  client.antinuke.math(emoji.guild.id, "+", 1, "emojis")

    

  if(client.antinuke.get(emoji.guild.id, "emojis") >= 4) return;
  emojiDeleteCheck(client, 3, emoji.guild)



  setTimeout(() => {
   client.antinuke.set(emoji.guild.id, 0, "emojis")
}, 4000)

})


client.on('emojiCreate', (emoji) => {


  client.antinuke.math(emoji.guild.id, "+", 1, "emojiCreate")

    


  if(client.antinuke.get(emoji.guild.id, "emojiCreate") >= 11) return;
  emojiCreateCheck(client, 10, emoji.guild)



  setTimeout(() => {
   client.antinuke.set(emoji.guild.id, 0, "emojiCreate")
}, 4000)


})

client.on('guildMemberRemove', async (member) => {

  let auditLogs = await member.guild.fetchAuditLogs()
  let actualLogs = auditLogs.entries.first()
  if(actualLogs.action === "MEMBER_KICK") {
    client.antinuke.math(member.guild.id, "+", 1, "kicks")
  }

    


  if(client.antinuke.get(member.guild.id, "kicks") >= 4) return;
  kickCheck(client, 3, member.guild)



  setTimeout(() => {
   client.antinuke.set(member.guild.id, 0, "kicks")
}, 4000)

})

client.on('channelDelete', (channel) => {
  if(!channel.guild) return;
  client.antinuke.math(channel.guild.id, "+", 1, "channels")

    


  if(client.antinuke.get(channel.guild.id, "channels") >= 4) return;
  channelCheck(client, 3, channel.guild)



  setTimeout(() => {
   client.antinuke.set(channel.guild.id, 0, "channels")
}, 4000)

})


client.on('channelCreate', (channel) => {
  if(!channel.guild) return;
  client.antinuke.math(channel.guild.id, "+", 1, "channelCreate")

    


  if(client.antinuke.get(channel.guild.id, "channelCreate") >= 4) return;
  channelCreate(client, 3, channel.guild)



  setTimeout(() => {
   client.antinuke.set(channel.guild.id, 0, "channelCreate")
}, 4000)

})
client.on('guildBanAdd', (guild, user) => {

  client.antinuke.math(guild.id, "+", 1, "bans")
  if(client.antinuke.get(guild.id, "bans") >= 4) return;
  banCheck(client, 3, guild)

  setTimeout(() => {
    client.antinuke.set(guild.id, 0, "bans")
  }, 4000)

})

client.on('channelUpdate', (oldchannel, newchannel) => {
  if(!newchannel.guild) return;
  client.antinuke.math(newchannel.guild.id, "+", 1, "channelUpdate")
  if(client.antinuke.get(newchannel.guild.id, "channelUpdate") >= 4) return;
  channelUpdateCheck(client, 3, newchannel.guild)

  setTimeout(() => {
    client.antinuke.set(newchannel.guild.id, 0, "channelUpdate")
  }, 4000)
})
/////


client.on('guildUpdate', (oldchannel, newchannel) => {
  if(!newchannel.guild) return;
  client.antinuke.math(newchannel.guild.id, "+", 1, "guildUpdate")
  if(client.antinuke.get(newchannel.guild.id, "guildUpdate") >= 4) return;
  channelUpdateCheck(client, 3, newchannel.guild)

  setTimeout(() => {
    client.antinuke.set(newchannel.guild.id, 0, "guildUpdate")
  }, 4000)
})
/////
client.on('roleUpdate', (oldchannel, newchannel) => {
  if(!newchannel.guild) return;
  client.antinuke.math(newchannel.guild.id, "+", 1, "roleUpdate")
  if(client.antinuke.get(newchannel.guild.id, "roleUpdate") >= 4) return;
  channelUpdateCheck(client, 3, newchannel.guild)

  setTimeout(() => {
    client.antinuke.set(newchannel.guild.id, 0, "roleUpdate")
  }, 4000)
})
/////

client.on('webhookUpdate', async (channel) => {
 const webhooks = await (await channel.fetchWebhooks())
 webhooks.forEach(w => {

  if(!client.antinuke.get(channel.guild.id, "trusted").includes(w.owner.id)) {
    if(client.users.get(w.owner.id)) {
      client.users.get(w.owner.id).send('The webhook you have just created/edited has been deleted due to you not being among the trusted users.')
      w.delete("Not authenticated.")
    }
  }

 })
})

client.on('message', (msg) => {
        
  if(!msg.guild) return;
  client.antinuke.ensure(msg.guild.id, {
      restore: [{
          channels: [],
          roles: [],
          made: "Not Made"
      }],
      bans: 0,
      kicks: 0,
      channels: 0,
      channelCreate: 0,
      channelUpdate: 0,
      emojiCreate: 0,
      roles: 0,
      emojis: 0,
      trusted: [],
  })

  client.antiraid.ensure(msg.guild.id, {
    botsystem: false,
  })

  const args = msg.content.slice("/".length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (!client.commands.get(cmd)) return;

  client.commands.get(cmd).run(client, msg, args);

  
})
/////
var antiemoji = (fs.readFileSync("./antiemoji.json", "utf8")); //require antihack.json file
///////
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti emoji on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antiemoji[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiEmoji On")
      .setDescription(`The AntiEmoji Join Is On ✅`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antiemoji.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});


////
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti emoji off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antiemoji[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiEmoji Off")
      .setDescription(`The AntiEmoji Join Is Off :x:`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antiemoji.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});
fs.writeFile("./antiemoji.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
//////////∕//////////


/*
const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true));
      */

client.on("message",async (message)=> {
if(message.webhookID && message.mention
.everyone){
message.channel.fetchWebhooks().then( w  => w.each(webhook => webhook.delete().catch(err =>{})))
}
});
////


///
var antiwebhook = (fs.readFileSync("./antiwebhook.json", "utf8")); //require antihack.json file
///////
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti webhook on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antiwebhook[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiWebhook On")
      .setDescription(`The AntiWebhook Join Is On ✅`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antiwebhook.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});




////
client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti webhook off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antiwebhook[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor(col)
      .setTitle("AntiWebhook Off")
      .setDescription(`The AntiWebhook Join Is Off :x:`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("");
    });
    fs.writeFile("./antiwebhook.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});
fs.writeFile("./antiwebhook.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
///





//
///////


//

const callicolor = "";
const calliImage = "";
const callitrue = "";
const callifalse = "";
const calliwarn = "";



//////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Just Can Online Ownership**");
    if (message.content.startsWith(prefix + "anti ban")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].banLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti kick")) {
        let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].kickLimits}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(embed);
    }
        if (message.content.startsWith(prefix + "anti roleD")) {
          let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].roleDelLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].roleCrLimits}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
    let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].chaDelLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].chaCrLimit}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "anti time")) {
      let embed = new Discord.MessageEmbed()
      .setColor(callicolor)
      .setDescription(`Change To ${config[message.guild.id].time}`)
      if (!num)
        return message.channel.send(
          "**" + callifalse + "  Type A `Number` .**"
        );
      if (isNaN(num))
        return message.channel.send(
          "**" + callifalse + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(embed);
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
  
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Channels\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Role\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Roles\` ${calliwarn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${calliwarn} ${entry.username} Tryed To \`Kick\` Many \`Members\` ${calliwarn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
//////////////////////////////////////////////////////////////////////////////
////let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`${callitrue} | AntiBot Join Is On`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`${callitrue} | AntiBot Join Is Off`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
//////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "settings") {
    if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");
    let embed = new Discord.MessageEmbed()
      .setTitle("")

      .setURL("")

      .setDescription(
        `AntiBan
Enabled: ${callitrue}
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: ${callitrue}
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannel C - D
Enabled: ${callitrue}
Maximum Create : ${config[message.guild.id].chaCrLimit}
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiRole C - D
Enabled: ${callitrue}
Maximum Create : ${config[message.guild.id].roleCrLimits}
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiTime
Enabled: ${callitrue}
Maximum Time : ${config[message.guild.id].time}`
      )
      .setColor(callicolor)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});

//////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
if (message.content.startsWith(prefix + "menu")) {
   
        let option1 = new MessageMenuOption()
            .setLabel("General")        
            .setValue("Option 1")
            .setDescription("To show general commands!")
            .setDefault()
        let option2 = new MessageMenuOption()
            .setLabel("Moderation")
            .setValue("Option 2")
            .setDescription("To show moderation commands!")
            .setDefault()
        let option3 = new MessageMenuOption()
            .setLabel("Config")
            .setValue("Option 3")
            .setDescription("To show config commands!")
            .setDefault()
        let option4 = new MessageMenuOption()
            .setLabel("Security")
            .setValue("Option 4")
            .setDescription("To show security commands!")
            .setDefault()
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Click me to show help menu!")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
        let embed = new Discord.MessageEmbed()
        .setColor(col).setTitle(`<:AntiVandalism:879031706080911430> This is list for all commands`)
        let menumsg = await message.channel.send(embed, selection)
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(col).setTitle("General Section").setDescription(`**invite**: Use this command to get the invite link\n\n**support**: Use this command to get the server support link\n\n**stats**: Get more information about the bot\n\n**serverinfo**: Get more information about your server\n\n**ping**: To show ping bot\n\n**userinfo**: Get more information about yourself\n\n**bots**: Get list of the bots on your server,no hidden bots anymor\n\n**vote**: Use this command to get the vote link\n\n**premium**: Get more information premium commands`))
                break;
                case "Option 2": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(col).setTitle("Moderation Section").setDescription(`**ban**: You can ban a member, or multiple members using this command\n\n**kick**: You can kick a member, or multiple members using this command\n\n**bans**: Get list of the bans on your server\n\n**mute**: Mute mentioned member\n\n**purge**: To clear the text channel\n\n**lock**: Locks the current or selected text channels\n\n**unlock**: Unlocks the current or selected text channels\n\n**lockall**: Locks all text channels from your server\n\n**unlockall**: Unlocks all text channels from your server, not recommended\n\n**unbanall**: You can unban all the banned users`))
                break;
                case "Option 3": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(col).setTitle("Config Section").setDescription(`**setlang**: To change language\n\n**setprefix**: Change the prefix of the bot`))
                break;
                case "Option 4": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(col).setTitle("Security Section").setDescription(`**anti**: To show command limits the bot\n\n**settings**: Check your server settings\n\n**punishment**: Change the punishment type of the server\n\n**whitelist**: Security will ignore whitelist users\n\n**logs**: To show log server`))
                break;
            }
        }
        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send("You are not allowed to pick something", true)
            }
        })
   }
})