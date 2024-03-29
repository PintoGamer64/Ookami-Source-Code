const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { execute } = require("../Client/ready");

module.exports = {
    name: "interactionCreate",
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client){
        if(interaction.isCommand() || interaction.isContextMenu){
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                    new MessageEmbed()
                    .setColor("ORANGE")
                    .setDescription("❌ Hubo Un Error Ejecutando Este Comando")
                ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client);
        }
    }
}