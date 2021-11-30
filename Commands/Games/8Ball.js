const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "8ball",
    description: "Bola 8 BOLA 8 !!!!!!",
    Permission: "",
    options: [
        {
            name: "pregunta",
            description: "Pregunta",
            type: "STRING",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const { channel, options } = interaction;
        let userid = await interaction.user.tag;
        const Tipo = options.getString("pregunta");

        let respuestas = ["Si!", "No!", "Tal vez", "Probablemente", "Probablemente si", "Probablemente no", "No lo creo", "¿Estas segur@?", "Claro que no!", "¿Tu lo crees?", "Definitivamente que no"]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)]

        const exampleEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`Respondiendo a tu pregunta ${userid}`)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: "**Tu pregunta / Question**", value: `${Tipo}` },
                { name: '**Tu respuestas / Answer**', value: `${random}` }
            )
            .setTimestamp()

        interaction.reply({ embeds: [exampleEmbed] });
    }
}