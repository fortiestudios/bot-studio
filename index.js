//           Installed with MIT License
//
//           Discord Support: https://discord.gg/wDNqXZ7wpq

const fs = require("fs");

const yaml = require("js-yaml");
const supportbot = yaml.load(
  fs.readFileSync("./Configs/supportbot.yml", "utf8")
);

const Client = require("./Structures/Client.js");
const client = new Client({});

client.start(supportbot.Token);
