const Discord = require('discord.js'); 
const client = new Discord.Client(); 
require('dotenv').config()


client.on("ready", () => {
    const log = console.log; 
    log("CryoX is Online!")
    client.user.setActivity({
        name: "| !help", //we will set up the help command next episode!
        type: "WATCHING"
    })
})

//ping command
client.on("message", message => {
    if (message.content === "!ping") {
        message.channel.send("PONG!")
    }
})



//episode 2
//embed
client.on('message', message => {
    if (message.content === '!test'){
        if (!message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send("`Error: You do not have the required permissions to execute this command!`").then(m => m.delete({ timeout: 5000 }))
        const embed = new Discord.MessageEmbed()
            .setTitle("Test")
            .setDescription("This is a test command!")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setColor(0x00FFFB)
            .addFields(
                {
                    name: "test", 
                    value: "testing",
                    inline: true
                },
                {
                    name: "test", 
                    value: "testing",
                    inline: true
                },
            )
            message.channel.send(embed)
            message.delete()
    }
})

client.login(process.env.TOKEN)
