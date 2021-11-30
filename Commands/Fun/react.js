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
        }else if (Tipo === "happy") {
            var respuestas = ['http://pa1.narvii.com/6541/99152b4a313f6ae47bdd4d718f1dc51cfe07b974_00.gif', 'https://pa1.narvii.com/6058/807f36895c63f741baca14fe723f16fb3c3cb95d_hq.gif', 'https://pa1.narvii.com/6394/16f50836442aa7de8c397239e49c737455b79318_hq.gif', 'https://pa1.narvii.com/6095/528c61bf544fb035f5429782f5ac33ccb06adc90_hq.gif']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`${mention} esta feliz!!`)
                .setImage(random)

            interaction.reply({ embeds: [exampleEmbed] });
        }else if (Tipo === "hungry") {
            var respuestas = ['http://pa1.narvii.com/6383/2d3535eddf4cf783c66f4e08a5cd6c35b506bc83_00.gif', 'https://pa1.narvii.com/6327/0eb66a087d1e82419876866c1e69fb8a1df6a890_hq.gif', 'https://c.tenor.com/xb6y9RTgTCYAAAAC/quiero-comer-hambre.gif', 'http://24.media.tumblr.com/ff48f6132bf1540c90d1cf13ec034c03/tumblr_mr5tblrRs91ry8xtco1_400.gif']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`${mention} tiene hambre!!`)
                .setImage(random)

            interaction.reply({ embeds: [exampleEmbed] });
        }else if (Tipo === "sad") {
            var respuestas = ['https://i.pinimg.com/originals/6e/8d/98/6e8d98db51b7bac3497b8ce0f58eb4cf.gif', 'https://pa1.narvii.com/7181/0850374bd2c93d767730ba2a72385904cc555e95r1-500-283_hq.gif', 'https://thumbs.gfycat.com/AcidicBlissfulCobra-size_restricted.gif', 'http://pa1.narvii.com/6169/3b6985b63328967839c61774d2bed0f6452abff6_00.gif']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`${mention} esta triste!! :,(`)
                .setImage(random)
                .setTimestamp()

            interaction.reply({ embeds: [exampleEmbed] });
        }else if (Tipo === "awesome") {
            var respuestas = ['https://nobodyknowsabouterlusuy.files.wordpress.com/2018/10/tumblr_pg793w3mp81r8r1k2o4_540.gif', 'http://2.bp.blogspot.com/-T0IPwC9ejVk/VE7wGiyhJUI/AAAAAAAAAVo/rRGVWuEXB44/s1600/37-Gifs-animados-de-Sailor-Moon-reds-sociales-anime-manga-google-mas.gif', 'http://3.bp.blogspot.com/-KUudnY1VOXA/VAeUzsal81I/AAAAAAAAGJo/Enn6EHm1TjQ/s1600/IkUYoho.gif', 'https://pa1.narvii.com/6382/f959dcf6b7d8db64710f0fa3e41c92044fc3e58c_hq.gif']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`${mention} esta asombrado!! :O`)
                .setImage(random)
                .setTimestamp()

            interaction.reply({ embeds: [exampleEmbed] });
        }else if (Tipo === "fear") {
            var respuestas = ['http://pa1.narvii.com/6152/19cc98cc1f8a663cb6332df2172179dbf7d7bfb0_00.gif', 'https://i.imgur.com/exQzfxT.gif', 'https://c.tenor.com/8uiGM5xkGO8AAAAC/anime-girl.gif', 'https://pa1.narvii.com/6509/9653eb7004b7ae9ffada87f6e7a0d8d3a243bd66_hq.gif']
            var random = respuestas[Math.floor(Math.random() * respuestas.length)]

            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`${mention} esta horrorizado o tiene miedo!! D,:`)
                .setImage(random)
                .setTimestamp()

            interaction.reply({ embeds: [exampleEmbed] });
        }else{
            const exampleEmbed = new MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`**${mention} No describiste bien tu emocion.**`)
                .setTimestamp()

            interaction.reply({ embeds: [exampleEmbed] });
        }
    }
}