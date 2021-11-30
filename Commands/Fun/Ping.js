const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping - Pong",
    Permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        interaction.reply({ content: "Poing" })
    }
}