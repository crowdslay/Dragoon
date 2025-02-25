const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

const { WebhookClient, GatewayIntentBits } = require('discord.js');


module.exports = {
  name: 'webhook',
  description: 'Displays a list of available commands and their descriptions.',
  async execute(client, message, args) {
    // Replace 'YOUR_WEBHOOK_URL' with your actual webhook URL crowd
    const webhookURL = 'https://discord.com/api/webhooks/1163480323129081906/GUjogZPEfhE5KnZeLdkom4u6k6A5VdLaX_1rdqqR5voEoBHITII-GiR5OYJ71U_PkAyk';

    // Create a new WebhookClient
    const webhook = new WebhookClient({ url: webhookURL });
    try {
        // Check if the 'edit' parameter is provided
        const editEmbed = args[0] && args[0].toLowerCase() === 'edit';
  
        // Create an EmbedBuilder for the embed message
        const embed = new EmbedBuilder()
          .setTitle(editEmbed ? "LET'S BE GAMERS!" : 'Webhook Embed')
          .setDescription(editEmbed ? `Please tell us about what games you like to play! :naruNoted:\n\n﹕❧・<@&1163489120706887714> :: :boom:\n﹕❧・<@&1163489123085070466> :: :shower:\n﹕❧・<@&1163489125316440165> :: :bow_and_arrow:\n﹕❧・<@&1163489126968999957> :: :boxing_glove: \n﹕❧・<@&1163489128940322886> :: :dart:\n﹕❧・<@&1163489547515072634> :: :ghost: \n﹕❧・<@&1163489549213782058> :: :tada:\n﹕❧・<@&1200154901129466027> :: :blue_heart:` : `This is a sample embed message sent via a webhook, containing \n <@&626041567542640660>` )
          .setColor(null)
          if (editEmbed) {
            embed.setImage('https://cdn.discordapp.com/attachments/1162906838690431115/1200160506632224829/gaming_banner.png?ex=65c52b92&is=65b2b692&hm=11f2a63af007db5a3275f5a616a0e27ccc80bc69ec059b9f689c5ca04548cb8e&');
            
          }
      // Send or edit the embed based on the 'edit' parameter
            if (editEmbed) {
              // FIND THE MESSAGE ID CROWD FOR THE WEBHOOK replace 1200171233
              await webhook.editMessage('1163507651695611935', { embeds: [embed] });
              message.reply('Embed message edited successfully!');
            } else {
              // Send a new embed message to the webhook
              await webhook.send({ embeds: [embed] });
              message.reply('Embed message sent successfully!');
            }
          } catch (error) {
            console.error('Error sending/editing webhook embed message:', error);
            message.reply('An error occurred while sending/editing the webhook embed message.');
          } finally {
            // Destroy the WebhookClient to avoid memory leaks
            webhook.destroy();
          }
        },
      };