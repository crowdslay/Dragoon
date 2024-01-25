module.exports = {
  name: 'gonebye',
  description: 'Read and send messages from a predefined script using regex',
  async execute(client, message, args) {
    
    if (message.author.id === '537619455409127442' || (message.author.id === '169160763091451904')) {
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
**__LazuLight__**
** **
!!<>!!
> **Elira Pendora**
https://discord.gg/famelira
!!<>!!`;

    // Split the script using regex and send each message separately
    const messages = script.split(/!!<>!!/);

    for (const msg of messages) {
      if (msg.trim() !== '') {
        // Send each non-empty message as a new message with a 1-second delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.channel.send(msg.trim());
      }
    }
    } 
    else {
     await message.channel.send('Dont try weird stuff buddy :(')
    }
  },
};