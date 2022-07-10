const { CommandInteraction, MessageEmbed, Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });

module.exports = {
    name: "dev",
    description: "Muestra detalles del desarrollador del Bot",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        console.log(`developer`);
        const exampleEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**Desarrollador Del Bot**\n╔═════════════════════════╗")
            .setDescription("Hola soy Joan Sebastian Cardozo Salinas, mejor conocido como **Pinto_Gamer64#1216**, y soy el creador de Ookami Bot :) \n Soy una persona aficionada por el desarrollo de mi Bot y el Desarrollo Web, si quieres contactarme, aqui estan mis formas de contactarme, pasen buen dia ;D")
            .addFields(
                { name: `........................`, value: `[--[Github]--](https://github.com/PintoGamer64)`, inline: true },
                { name: `..........................`, value: `[-[Facebook]-](https://github.com/PintoGamer64)`, inline: true },
                { name: `........................`, value: `[--[Twitter]--](https://twitter.com/CarozoJoan)`, inline: true },
                { name: `.........................................................................................`, value: `╚═════════════════════════════╝` },
            )
            .setThumbnail('https://avatars.githubusercontent.com/u/84690368?v=4')

        interaction.reply({ embeds: [exampleEmbed] });
    }
}