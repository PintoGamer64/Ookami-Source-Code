const Client = require("discord.js");
const mongo = require("mongoose");
const { Database } = require("../../config.json")

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log("The Bot is Working 💼");
        client.user.setActivity(
            "PintoGamer64",
            {
                type: "WATCHING"
            }
        );
        if(!Database) return;
        mongo.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=> {
            console.log("The Bot Is Connected For The Database 🔑");
        }).catch((err) => {
            console.log(err)
        })
    }
}