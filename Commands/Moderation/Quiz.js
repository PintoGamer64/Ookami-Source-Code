const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "quiz",
    description: "Haz un quiz, con 3 reacciones | si | neutral | no |",
    Permission: "ADMINISTRATOR",
    options: [
        {
            name: "pregunta",
            description: "pregunta de la encuesta",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        try {
            const { channel, options } = interaction;
            const Tipo = options.getString("pregunta");

            const embed = new MessageEmbed()
                .setColor("#ff0000")
                .setTitle(`${interaction.user.tag}: Pregunta`)
                .setDescription(`¿` + Tipo + `?`)
                .setThumbnail(`${interaction.user.displayAvatarURL({ size: 1024, dynamic: true })}`)
                .setTimestamp()

            interaction.reply({ embeds: [embed] });
            const message = await interaction.fetchReply();

            message.react("🟢");
            message.react("⚪");
            message.react("🔴");
        } catch (e) {
            console.log(e)
        }
    }
}