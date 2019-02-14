const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true})

client.on("ready", async () => {
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("Raidboss bot doody");
});
//onduty2
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    if(cmd === `${prefix}onduty1`){
       
        let botembed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .addField("On Duty", "*If you would like to go OnDuty, use the command **rb-onduty** to get notifications on reports.*")
        .addField("Off Duty", "*If you would like to go OffDuty, use the command **rb-offduty** to not get notifications on reports.*");
        message.channel.send(botembed);
    }
});
//onduty role
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let onduty = (`${prefix}onduty`)
   
    if (message.channel.id === '529421034781147156') {
        if((message.content!=onduty)) {
            await message.delete(5000)
            message.author.send('Please use the command !onduty or !offduty.');
        }
        else{
            if(cmd === onduty){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField(`OnDuty Rank Given`,`${message.author} is now OnDuty.`);  
                message.channel.send(botembed);
                let OnDuty = message.member.guild.roles.find("name", "OnDuty");
                message.member.addRole(OnDuty)
                let OffDuty = message.member.guild.roles.find("name", "OffDuty");
                message.member.removeRole(OffDuty)
                await message.delete()
              
            }
        }
    }
});
//offduty role
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let offduty = (`${prefix}offduty`)
   
    if (message.channel.id === '529421034781147156') {
        if((message.content!=offduty)) {
            await message.delete(5000)
            message.author.send('Please use the command !offduty.');
        }
        else{
            if(cmd === offduty){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField(`OffDuty Rank Given`,`${message.author} is now OffDuty.`);  
                message.channel.send(botembed);
                let OffDuty = message.member.guild.roles.find("name", "OffDuty");
                message.member.addRole(OffDuty)
                let OnDuty = message.member.guild.roles.find("name", "OnDuty");
                message.member.removeRole(OnDuty)
                await message.delete()
              
            }
        }
    }
});
//10manqueue logs 1
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if(!oldUserChannel && newUserChannel) {
            if (oldMember.voiceChannelID !== '245832221900931073' && newMember.voiceChannelID !== '245832221900931073') return;
            // user moved from one voice channel to another (old channel ID is different from the new one)
              let quotes = ("``")
              let hahaembed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .addField(`10man Queue Logs`, `${newMember} left **${oldUserChannel}** ${quotes}->${quotes} **${newUserChannel}**`, message.author.avatarURL)
                .setTimestamp();
                client.channels.get('530786248198062091').send(hahaembed)
    }
});
//10manqueue logs 2
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if(!oldUserChannel && newUserChannel) {
        if (oldMember.voiceChannelID !== '486205232066461711' && newMember.voiceChannelID !== '486205232066461711') return;
        // user joined a channel without being in one previously (old channel is undefined, new channel is defined)
        let botembed = new Discord.RichEmbed()
            .setColor("#32CD32")
            .addField(`10man Queue Logs`, `${newMember} joined voice channel **${newUserChannel}**`, message.author.avatarURL)
            .setTimestamp();
            client.channels.get('530786248198062091').send(botembed)
                } else if (oldMember.voiceChannelID !== undefined) {
            if (oldMember.voiceChannelID !== '486205232066461711' && newMember.voiceChannelID !== '486205232066461711') return;
            // user moved from one voice channel to another (old channel ID is different from the new one)
            let quotes = ("``")
                let hahaembed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .addField(`10man Queue Logs`, `${newMember} left **${oldUserChannel}** ${quotes}->${quotes} **${newUserChannel}**`)
                .setTimestamp();
                client.channels.get('530786248198062091').send(hahaembed)
                }
});
//chesson command
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let onchess = (`${prefix}onchess`)
   
    if (message.channel.id === '540133702039109642') {
            if(cmd === onchess){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField(`playChess Rank Given`,`${message.author} has toggled on the playChess rank.`);  
                message.channel.send(botembed);
                let playChess = message.member.guild.roles.find("name", "playChess");
                message.member.addRole(playChess)
                await message.delete(10000)                
            }
       }
});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let offchess = (`${prefix}offchess`)
   
    if (message.channel.id === '540133702039109642') {
            if(cmd === offchess){
                let botembed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .addField(`playChess Rank Taken`,`${message.author} has toggled off the playChess rank.`);  
                message.channel.send(botembed);
                let playChess = message.member.guild.roles.find("name", "playChess");
                message.member.removeRole(playChess)
                await message.delete(10000)
            }
    }
});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let dabcommand = (`<:dab:509149269022736404>`)
    if(cmd === dabcommand){
        message.channel.send("<@268489489259823104> <:dab:509149269022736404>");
    }
});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  
    if (message.channel.id === '545300546047967232' && cmd === `${prefix}10manban`) {
      //check permission
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have this permission.");
  
      // get mute target or if none, end func
      var banTarget = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  
      //check if there is a mute target
      if (!banTarget) return message.channel.send("You didn't specify a user to ban.");
  
      // if target is higher role than author (message.member), end func
      if (banTarget.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition) return message.channel.send("You cannot ban someone with a higher or equal role than you.");
  
      // look for muted role in guild
      // -------- CHANGE <muted role name> TO THE NAME OF YOUR MUTE ROLE ------
      var role = message.guild.roles.find(r => r.name === "no10mans");
  
      // if target already has the role, 
      if (banTarget.roles.has(role.id)) return message.channel.send("This player is already banned.");
  
      // if the mute author did not specify a time:
      if (isNaN(args[1])) {
        message.channel.send("You need to specify a time.");
      } else {
        client.tempBannedUsers[banTarget.id] = {
          guild: message.guild.id,
          // convert 'day' number to milliseconds
          time: Date.now() + parseInt(args[1]) * 60000
        }
        // after the target has been given the muted role, reply to confirm the action
        await muteTarget.addRole(role).catch(err => {console.log(err.stack); });
        let botembed = new Discord.RichEmbed()
        .setColor("#FF0505");
        .addField(`${banTarget.user.username} has been banned for ${args[1]} minutes.`);
        client.channels.get('530786248198062091').send(botembed);
            }
        }
  });
//help command
    client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let help = (`${prefix}help`)
    if(cmd === help){
    message.channel.send("**Use rb-help 2** to see staff commands."); 
                let EmBeD = new Discord.RichEmbed()
                .setColor("#2ecc71")
                .addField(`**rb- Commands**`)
                .addField("**rb-onchess**", "When activated, you will get notifications for anyone who would like to use the <#540133702039109642> channel.")
                .addField("**rb-offchess**", "When activated, you will no longer get notifications for anyone who would like to use the <#540133702039109642> channel.")
                .addField("<:dab:509149269022736404>", "Just tags <@268489489259823104> and makes him made \:)");
        message.channel.send(EmBeD);
    }
 });
client.login(process.env.BOT_TOKEN);
