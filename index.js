onst {
    Collection,
    Client,
    MessageEmbed,
    Message,
    Intents,
  } = require("discord.js");
  require("discord-reply");
  const client = new Client({
      disableMentions: "everyone",
  });
  require('discord-buttons')(client)
  const path = require("path");
  const fs = require("fs");
  const config = require("./config.json");
  module.exports = client;
  client.color = config.color;
  client.commands = new Collection();
  client.prefix = config.prefix;
  client.aliases = new Collection();
  client.categories = fs.readdirSync(path.resolve("./commands"));
  ["command"].forEach((handler) => {
    require(path.resolve(`./handlers/${handler}`))(client);
  });
  
  const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    poolSize: 5,
    connectTimeoutMS: 10000,
    family: 4,
  };
  const chalk = require(`chalk`);
  const { connect } = require("mongoose");
  connect(config.mongo, dbOptions).then(() => {
    console.log(
      chalk.cyan("[Information] ") + chalk.blue(`Connected to Mongodb`)
    );
  });
  
  client.login(config.token);

  // code link in description
