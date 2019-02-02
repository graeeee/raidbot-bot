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
        // user joined a channel without being in one previously (old channel is undefined, new channel is defined)

        let botembed = new Discord.RichEmbed()
            .setColor("#32CD32")
            .addField(`10man Queue Logs`, `${newMember} joined voice channel **${newUserChannel}**`)
            .setTimestamp();
            client.channels.get('530786248198062091').send(botembed)
                } else if (oldMember.voiceChannelID !== undefined) {
            if (oldMember.voiceChannelID !== '245832221900931073' && newMember.voiceChannelID !== '245832221900931073') return;
            // user moved from one voice channel to another (old channel ID is different from the new one)
            let hahaembed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .addField(`10man Queue Logs`, `${newMember} left **${newUserChannel}**`)
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
            let hahaembed = new Discord.RichEmbed()
                .setColor("#FF0000")
                .addField(`10man Queue Logs`, `${newMember} left **${newUserChannel}**`)
                .setTimestamp();
                client.channels.get('530786248198062091').send(hahaembed)
                }
});
    //10manqueue1
    client.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel
      
      
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
      
           // User Joins a voice channel
        if (newMember.voiceChannelID === '245832221900931073') return;
        let manqueue1 = newMember.guild.roles.find("name", "10manqueue1");
            newMember.addRole(manqueue1);
        } else if(newUserChannel === undefined){
            // User leaves a voice channel
            if (newMember.voiceChannelID === '245832221900931073') return;
            let manqueue1 = newMember.guild.roles.find("name", "10manqueue1");
                newMember.removeRole(manqueue1);
        }
      });
      //10manqueue2
      client.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel
      
      
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
      
           // User Joins a voice channel
        if (newMember.voiceChannelID === '486205232066461711') return;
        let manqueue2 = newMember.guild.roles.find("name", "10manqueue2");
            newMember.addRole(manqueue2);
        } else if(newUserChannel === undefined){
            // User leaves a voice channel
            if (newMember.voiceChannelID === '486205232066461711') return;
        let manqueue2 = newMember.guild.roles.find("name", "10manqueue2");
                newMember.removeRole(manqueue2);
        }
      });
client.login(process.env.BOT_TOKEN);
