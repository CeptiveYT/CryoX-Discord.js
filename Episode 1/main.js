//watch youtube video to understand: 

const Discord = require('discord.js'); 
const client = new Discord.Client(); 
require('dotenv').config()

//login message
client.on("ready", () => {
    const log = console.log; 
    log("CryoX is Online!")
    client.user.setActivity({
        name: "| !help", //we will set up the help command next episode!
        type: "WATCHING"
    })
})

//basic ping command
client.on("message", message => {
    if (message.content === "!ping") {
        message.channel.send("PONG!")
    }
})

client.login(process.env.TOKEN)
