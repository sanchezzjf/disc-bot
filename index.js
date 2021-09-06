//bot-url = https://discord.com/api/oauth2/authorize?client_id=879413010135941130&permissions=0&scope=bot%20applications.commands

// Require the necessary discord.js classes
const fs = require("fs");
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file =>file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.data.name, command);
}
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if(!command) return;

	try{
		await command.execute(interaction);
	}catch(error){
		console.error(error);
		await interaction.reply({content: 'Erro ao executar o comando...', ephemeral: true});
	}

});

// Login to Discord with your client's token
client.login(token);


