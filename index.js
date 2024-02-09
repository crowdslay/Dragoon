const config = require('./config.json');
const { Client, IntentsBitField, EmbedBuilder, ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, Events, ModalBuilder, Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://USERNAME:PASSWORD@cluster0.ukxb93z.mongodb.net/?retryWrites=true&w=majority";
// MongoDB connection setup
const mongoClient = new MongoClient(uri, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB() {
  try {
    await mongoClient.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

*/

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]

});


const Discord = require('discord.js');
const { loadCommands } = require('./handler');

// Create a new collection to store the commands
client.commands = new Collection();

// Load all the commands
loadCommands(client);



client.on('messageCreate', message => {
  try {
  if (message.content.startsWith('c!')) {
    const args = message.content.slice(2).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    console.log(`Received command: ${commandName}`);
// console.log('commandAlias:', client.commands)

   

    const command = client.commands.get(commandName) || client.commands.find(c => c.aliases && c.aliases.includes(commandName.toLowerCase()));


    if (!command) return;

    try {
      console.log('Executing command:', command.name);
      command.execute(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while executing the command.');
    }
  }
    } catch (error) {
  console.log('what the fuck:', error)
}
});

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!🚀`);
 
  client.user.setPresence({ activities: [{ name: 'Crowdslay is probably breaking something again!' }], status: 'online' });
}); //tells that bot is hot and on

const BOT_PREFIX = "c!";

client.on('messageCreate', async (message) => {
  // Check if the message is from a bot or not in a guild
  if (message.author.bot || !message.guild) return;

  // Load current settings
  const settings = require('./commands/fun/watching.json');

  // Check if the channel is being watched
  if (!settings.channels.hasOwnProperty(message.channel.id)) return;

  const channelId = message.channel.id;
  const channelData = settings.channels[channelId];

  // Check if the channel is enabled
  if (!channelData.stats.status) return;

  // Check if there are keywords for autoresponse
  if (channelData.keywords && channelData.keywords.length > 0) {
    let matchedKeyword = null;
    let messageContent = message.content.toLowerCase();

    // Iterate through each keyword
    channelData.keywords.forEach(keywordObj => {
      if (Array.isArray(keywordObj.keyword)) {
        // If keyword is an array, check if message content starts with any of the keywords
        keywordObj.keyword.forEach(keyword => {
          if (messageContent.startsWith(keyword.toLowerCase())) {
            matchedKeyword = keywordObj;
          }
        });
      } else {
        // If keyword is a single string, check if message content starts with it
        if (messageContent.startsWith(keywordObj.keyword.toLowerCase())) {
          matchedKeyword = keywordObj;
        }
      }
    });

    // If a matched keyword is found, send the autoresponse
    if (matchedKeyword) {
      message.reply(matchedKeyword.response);
    }
  }
});





client.login(config.token);
                                                                                                                                  