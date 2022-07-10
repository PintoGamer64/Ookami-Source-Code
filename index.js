//CALLS: LLamada de paquetes
const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

//CALLS: Archivos
const { token } = require("./config.json");

client.commands = new Collection();

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

client.login(token)