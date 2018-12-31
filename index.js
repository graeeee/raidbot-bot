const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({diableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Raidboss bot doody");
});
//onduty2
bot.on("message", async message => {
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
bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let onduty = (`${prefix}onduty`)
   
    if (message.channel.id === '524786824342929408') {
        if((message.content!=onduty)) {
            await message.delete(5000)
            message.author.send('Please use the command !onduty or !offduty.');
        }
        else{
            if(cmd === onduty){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField("OnDuty Rank Given","You are now OnDuty.");  
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
bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let offduty = (`${prefix}offduty`)
   
    if (message.channel.id === '524786824342929408') {
        if((message.content!=offduty)) {
            await message.delete(5000)
            message.author.send('Please use the command !offduty.');
        }
        else{
            if(cmd === offduty){
                let botembed = new Discord.RichEmbed()
                .setColor("#008000")
                .addField("OffDuty Rank Given","You are now OffDuty.");  
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
bot.on("message", async message => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let offduty = (`${prefix}reset`)
    if((message.content === offduty)) {
                let dab = message.member.guild.roles.find("name", "OffDuty");
                let OnDuty = message.member.guild.roles.find("name", "OnDuty");
                message.member.removeRole(OnDuty)
                await 
                message.member.removeRole(dab)
    }
});
bot.login(botconfig.token);
