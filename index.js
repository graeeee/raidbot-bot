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
        .addField("On Duty", "*If you would like to go OnDuty, use the command !onduty to get notifications on reports.*")
        .addField("Off Duty", "*If you would like to go OffDuty, use the command !offduty to not get notifications on reports.*");
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
                .addField(`10man Queue Logs`, `${newMember} left **${oldUserChannel}** ${quotes}->${quotes} **${newUserChannel}**`)
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
            .addField(`10man Queue Logs`, `${newMember} joined voice channel **${newUserChannel}**`)
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

// !tempmute command
// ------> CHANGE MUTE ROLE NAME ON LINES 201 AND 207 <-------
client.on("message", async message => {
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if (message.channel.id === '540133702039109642' && cmd === `${prefix}tempmute`) {
    //check permission
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" you do not have this permission.");

    // get mute target or if none, end func
    var muteTarget = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);

    //check if there is a mute target
    if (!muteTarget) return message.channel.send("Oops! You didn't specify a user to mute.");

    // if target is author of command msg, end func
    if (muteTarget.id === message.author.id) return message.channel.send("You cannot mute yourself.");

    // if target is higher role than author (message.member), end func
    if (muteTarget.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition) return message.channel.send("You cannot mute someone with a higher role than you!");

    // look for muted role in guild
    // -------- CHANGE <muted role name> TO THE NAME OF YOUR MUTE ROLE ------
    var role = message.guild.roles.find(r => r.name === "<muted role name>");

    // if muted role does not exist, create muted role
    if (!role) {
      try {
        role = await message.guild.createRole({
          name: "<Muted Role Name>",
          color: "#e4e4e4",
          permissions: []
        });
      // loop through channels & disable messages and reactions perms for the muted role
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          }).catch(err => {
            console.log(`//------ERROR------//\n\n${err.stack}`);
          });
        });
      } catch(err) {
        console.log(`\n\n//------ERROR------//\n\n${err.message}`);
        console.log(`\n\n//------STACK------//\n\n${err.stack}`);
      }
    }
    if (muteTarget.roles.has(role.id)) return message.channel.send("This user is already muted!");

    // if the mute author did not specify a time:
    if (isNaN(args[1])) {
      message.channel.send('You did not specify how long the user should be muted!');
    } else {
      client.tempMutedUsers[muteTarget.id] = {
        guild: message.guild.id,
        // convert 'minutes' number to milliseconds
        time: Date.now() + parseInt(args[1]) * 60000
      }
      // after the target has been given the muted role, reply to confirm the action
      await muteTarget.addRole(role).catch(err => {console.log(err.stack); });
      // write the object to 'muted-users.json'
      fs.writeFile('./temp-muted-users.json', JSON.stringify(client.tempMutedUsers, null, 4),  err => {
        if (err) throw err;
        message.channel.send(`${muteTarget.user.username} has been muted for ${args[1]} minutes! `);
      });
    }
  }
});


client.login(process.env.BOT_TOKEN);
