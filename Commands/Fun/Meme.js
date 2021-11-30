const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
const memes = require('discord-memes2');

module.exports = {
    name: "meme",
    description: "Encontrar memes",
    Permission: "",
    options: [
        {
            name: "type",
            description: "Tipo de meme",
            type: "STRING",
            required: false
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction){
        const { channel, options } = interaction;
        const Tipo = options.getString("type");

        if (!Tipo) {
            let embed = new MessageEmbed()
            .setColor("#87CEEB")
            .setImage(`${memes.imagenesEspañol()}`)
            interaction.reply({ embeds: [embed] })
        }else if (Tipo === "vd") {
            interaction.reply(memes.videosEspañol())
        }
    }
}