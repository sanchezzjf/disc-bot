const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("f1")
    .setDescription("Hora da sesh!"),
    async execute(interaction){
        await interaction.member.send("Mr. Gobleta passa-te a bufa, aceitas?");
        await interaction.reply("Puxa e passa");
    },
};