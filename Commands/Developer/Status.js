const { Client, MessageEmbed, CommandInteraction, DiscordAPIError } = require("discord.js");
const { connection } = require("mongoose");
const client = new Client({ intents: 32767 });
require("../../Events/Client/ready");

module.exports = {
    name: "status",
    description: "Estado del Bot",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        const status = new MessageEmbed()
            .setColor("ORANGE")
            .setDescription(`**Client**: \`🟢 Conectado\` - \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n **Database**: \`${switchTo(connection.readyState)}\``)

        interaction.reply({ embeds: [status] })
    }
}

function switchTo(value) {
    var status = " ";
    switch (value) {
        case 0: status = `🔴 Desconectado`
            break;
        case 1: status = `🟢 Conectado`
            break;
        case 2: status = `🟠 Conectando`
            break;
        case 3: status = `🟣 Desconectando`
            break;
        default:
            break;
    }
    return status;
}