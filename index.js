//bot-url = https://discord.com/api/oauth2/authorize?client_id=879413010135941130&permissions=0&scope=bot%20applications.commands

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'noodle') {
		await interaction.reply('Your dick is now a noodle!');
	} else if (commandName === 'server') {
		await interaction.reply(`The server: ${interaction.guild.name} has already ${interaction.guild.memberCount} members`);
	} else if (commandName === 'user') {
		await interaction.reply(`${interaction.member.user} is gay.`);
	}else if (commandName === 'f1') {
        await interaction.member.send("Mr. Gobleta passa-te a bufa, aceitas?");
        await interaction.reply('shh......');
    }
});


// Login to Discord with your client's token
client.login(token);


