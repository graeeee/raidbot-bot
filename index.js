const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true});
client.tempBannedUsers = require('./temp-banned-users.json');
const fs = require ("fs");

client.on("ready", async () => {
  console.log(`${client.user.username} is online!`);

  client.user.setActivity("Raidboss Official Discord!", {type: "WATCHING"});

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
  
  
    if (message.channel.id === '545300546047967232' && cmd === `${prefix}10manban`) {
      //check permission
        let nopermission = new Discord.RichEmbed()
        .setColor("FF0505")
        .addField("**__Error__**", "You do not have permission.")
        .setTimestamp();   
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermission);
  
      // get mute target or if none, end func
      var banTarget = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
      //check if there is a mute target
        let specifyuser = new Discord.RichEmbed()
        .setColor("FF0505")
        .addField("**__Error__*", "You did not specify a user to ban.")
        .setTimestamp();
      if (!banTarget) return message.channel.send(specifyuser);
     
  
      // if target is higher role than author (message.member), end func
       let higherrole = new Discord.RichEmbed()
       .setColor("FF0505")
       .addField("**__Error__**", "You cannot ban someone with a higher or equal role than you.")
       .setTimestamp();
      if (banTarget.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition) return message.channel.send(higherrole);
  
      // look for muted role in guild
      // -------- CHANGE <muted role name> TO THE NAME OF YOUR MUTE ROLE ------
      var role = message.guild.roles.find(r => r.name === "no10mans");
  
      // if target already has the role,
          let alreadybanned = new Discord.RichEmbed()
          .setColor("#FF0505")
          .addField("**__Error__**", "This user is already banned.")
          .setTimestamp();
      if (banTarget.roles.has(role.id)) return message.channel.send(alreadybanned);
      // if the mute author did not specify a time:
      if (isNaN(args[1])) {
          let specifytime = new Discord.RichEmbed()
          .setColor("#FF0505")
          .addField("**__Error__**", "You did not specify a time.")
          .setTimestamp();
        message.channel.send(specifytime);
      } else {
        client.tempBannedUsers[banTarget.id] = {
          guild: message.guild.id,
          // convert 'day' number to milliseconds
          time: Date.now() + parseInt(args[1]) * 6000
        }
        // after the target has been given the muted role, reply to confirm the action
         await banTarget.addRole(role).catch(err => {console.log(err.stack); });
      // write the object to 'muted-users.json'
      fs.writeFile('./temp-banned-users.json', JSON.stringify(client.tempBannedUsers, null, 4),  err => {
        if (err) throw err;
        let botembed = new Discord.RichEmbed()
        .setColor("#FF0505")
        .setThumbnail(banTarget.user.avatarURL)
        .setTitle("**__10man Bans__**")
        .addField(`**User**`, `*<@${banTarget.user.id}>*`)
        .addField(`**Ban Length**`, `*${args[1]}m*`)
        .addField(`**Reason**`, `*not finished*`)
        .setTimestamp();
        client.channels.get('530786248198062091').send(botembed);
      });
    }
  }
});
client.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  
    if (message.channel.id === '545300546047967232' && cmd === `${prefix}10manban`) {
      //check permission
        let nopermission = new Discord.RichEmbed()
        .setColor("FF0505")
        .addField("**__Error__**", "You do not have permission.")
        .setTimestamp();   
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermission);
  
      // get mute target or if none, end func
      var banTarget = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
      //check if there is a mute target
        let specifyuser = new Discord.RichEmbed()
        .setColor("FF0505")
        .addField("**__Error__*", "You did not specify a user to ban.")
        .setTimestamp();
      if (!banTarget) return message.channel.send(specifyuser);
    }
    });
var members = [];

client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;

if(!members[message.author.id])
	members[message.author.id] = 0;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === `${prefix}10manlog`){
let logUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!logUser) return message.channel.send("Can't find user!");
let logReason = args.join(" ").slice(22);

members[message.author.id]++;

let logEmbed = new Discord.RichEmbed()
.setThumbnail(logUser.user.avatarURL)
.setDescription("**__Logged Ban__**")
.setColor("#FF0505")
.addField("Logged User", `*${logUser}*`)
.addField("Logged By", `*<@${message.author.id}>*`)
.addField("Reason", `*${logReason}*`)
.addField("Amount Of Logs", `*${members[message.author.id]}*`)
.setTimestamp(message.createdAt);

let logChannel = message.guild.channels.find(`name`, "10man_queue_logs");

logChannel.send(logEmbed);
}
});
client.login(process.env.BOT_TOKEN);
