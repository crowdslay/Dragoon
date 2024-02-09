module.exports = {
  name: 'print',
  description: 'Read and send messages from a predefined script using regex',
  async execute(client, message, args) {
    try {
    let targetChannel;
    if (message.author.id === '537619455409127442' || message.author.id === '169160763091451904') {
     if (args.length === 1 && args[0].match(/<#(\d+)>/)) {
        const channelId = args[0].match(/<#(\d+)>/)[1];
       console.log(channelId)
        targetChannel = message.guild.channels.cache.get(channelId);
       console.log('targetChannel:', targetChannel)
      } else {
        targetChannel = message.channel; // Send to the current channel if no args provided
      }

      if (targetChannel) {
        // Define your script here as a single string
        const script = `## Nijisanji <:Nijisanji:1155859360858259576>
** **
!!<>!!
**__OBSYDIA__**
** **
!!<>!!
> **Selen Tatsuki**
https://discord.gg/selen
!!<>!!
> **Rosemi Lovelock**
https://discord.gg/rosemi
!!<>!!
> **Petra Gurin**
https://discord.gg/FbjpNGjbdn
!!<>!!
** **
**__LazuLight__**
** **
!!<>!!
> **Elira Pendora**
https://discord.gg/famelira
!!<>!!
** **
**__Ethyria__**
** **
!!<>!!
> **Reimu Endou**
https://discord.gg/6cGttXXrJV
!!<>!!
** **
**__ILUNA__**
** **
!!<>!!
> **Aster Arcadia**
https://discord.gg/ZzUxzdm2Sn
!!<>!!
> **Maria Marionette**
https://discord.gg/RxK7CcZ5Ct
!!<>!!
** **
## Project Servers <:selenNotes:999552194435108915>
** **
!!<>!!
> **DJ Ember Album** - A Musician & Mixer Creative Group
https://discord.gg/34C8TYqZ7P
!!<>!!`;
        // Split the script using regex and send each message separately
        const messages = script.split(/!!<>!!/);

        for (const msg of messages) {
          if (msg.trim() !== '') {
            // Send each non-empty message as a new message with a 1-second delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            targetChannel.send(msg.trim());
          }
        }
      } else {
        message.channel.send('The specified channel does not exist.');
      }
    } 
    else {
      await message.channel.send('<@169160763091451904> LOOK AT THIS PERSON TRYIN TO TOUCH SUM THEY ARENT SUPPOSED TO');
    }
    }
    catch (error) {
console.log('Error Here', error)
message.channel.send('You perhaps sent the wrong channel Id crowd ```<#id>```');
       
    }
  },
};