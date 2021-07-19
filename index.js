const {Collection, Client, Discord, MessageEmbed} = require('discord.js')
const fs = require('fs')
const mongoose = require("mongoose")
const client = new Client({
    disableEveryone: true
})


const config = require('./config.json')




module.exports = client;

const prefix = config.prefix
const token = config.token
client.prefix = config.prefix;


client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 


client.login(token)