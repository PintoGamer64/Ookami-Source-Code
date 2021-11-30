const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "probability",
    description: "Medir las probabilidades",
    Permission: "",
    options: [
        {
            name: "text",
            description: "Pregunta",
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
        const pregunta = options.getString("text");

        let respuestas = ["10%", "20%", "30%", "50%", "70%", "80%", "90%", "100%",]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)]

        if (random === "10%") {
            var answer = "[█---------]";
        } else if (random === "20%") {
            var answer = "[██--------]";
        } else if (random === "30%") {
            var answer = "[███-------]";
        } else if (random === "50%") {
            var answer = "[█████-----]";
        } else if (random === "70%") {
            var answer = "[███████---]";
        } else if (random === "80%") {
            var answer = "[████████--]";
        } else if (random === "90%") {
            var answer = "[█████████-]";
        } else if (random === "100%") {
            var answer = "[██████████]";
        }

        const exampleEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .addFields(
                { name: "**Tu pregunta / Question**", value: `${pregunta}` },
                { name: "**La probabilidad es:**", value: `..................................`, inline: true },
                { name: `${answer}` + `${random}`, value: "..................................", inline: true }
            )
            .setTimestamp()

        interaction.reply({ embeds: [exampleEmbed] });
    }
}