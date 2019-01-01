const botconfig =require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({diableEveryone: true})

client.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Raidboss bot doody");
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
client.login(process.env.BOT_TOKEN);
