const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "hola",
    description: "Saludar a un usuario",
    Permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        interaction.reply({ content: "Hola, soy Ookami Bot" })
    }
}