const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "say",
    description: "Dire lo que quieras",
    Permission: "",
    options: [
        {
            name: "text",
            description: "Texto a decir por el bot",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        const { channel, options } = interaction;
        const Tipo = options.getString("text");

        interaction.reply(Tipo);
    }
}