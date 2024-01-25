const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'Crowd slays',
  aliases: ['crowd', 'slay'],
  async execute(client, message, interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Nijisanji <:Nijisanji:1155859360858259576>')
      .setDescription('Join the beautiful partnered servers of Nijisanji fr!')
      .setFields(
        {
          name: '**__OBSYDIA__**',
          value: '> **Selen Tatsuki**\n[Join Selen\'s Discord](https://discord.gg/selen)\n> **Rosemi Lovelock**\n[Join Rosemi\'s Discord](https://discord.gg/rosemi)',
          inline: false
        },
        {
          name: '**__LazuLight__**',
          value: '> **Elira Pendora**\n[Join Elira\'s Discord](https://discord.gg/famelira)',
            inline: false
        },
      );
    

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setStyle('Link')
          .setLabel('Selen\'s Discord')
          .setURL('https://discord.gg/selen'),
        new ButtonBuilder()
          .setStyle('Link')
          .setLabel('Rosemi\'s Discord')
          .setURL('https://discord.gg/rosemi')
        // new ButtonBuilder()
        //   .setStyle('Link')
        //   .setLabel('Elira\'s Discord')
        //   .setURL('https://discord.gg/famelira')
      );
    const row2 = new ActionRowBuilder()
    .addComponents(
       new ButtonBuilder()
          .setStyle('Link')
          .setLabel('Elira\'s Discord')
          .setURL('https://discord.gg/famelira')
    );

    message.channel.send({ embeds: [embed], components: [row, row2] });
  },
};
