const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping - Pong",
    Permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        interaction.reply({ content: "Poing" })
    }
}