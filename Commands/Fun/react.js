const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "react",
    description: "Reacciones",
    Permission: "",
    options: [
        {
            name: "type",
            description: "Tipo de reaccion",
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
        let user = await interaction.guild.members.fetch(interaction.targetId);
        const mention = interaction.user.tag;

        const Tipo = options.getString("type");

        if (Tipo === "angry") {
            var respuestas = ['https://static.vix.com/es/sites/default/files/t/toradora-taiga-gif.gif', 'https://pa1.narvii.com/6365/1c44a325b04a53950399fe3ea11b42de0b790545_hq.gif', 'https://c.tenor.com/1bxcJuQxVc8AAAAC/anime-gifs-to-communicate.gif', 'https://64.media.tumblr.com/892727dca6923c7cb4192bb2b638b387/tumblr_n15y4qZWNr1rveihgo1_500.gifv']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`@${mention} esta enojad@`)
                .setImage(random)
                .setTimestamp()

            interaction.reply({ embeds: [exampleEmbed] });
        }
    }
}