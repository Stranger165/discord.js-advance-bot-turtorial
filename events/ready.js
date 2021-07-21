const client = require("../index");
const chalk = require(`chalk`);

client.on("ready", () => {
  console.log(
    chalk.cyan("[Information] ") +
      chalk.blue(`${client.user.tag} is now online!`)
  );
});
