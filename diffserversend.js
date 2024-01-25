module.exports = {
  name: 'print2',
  description: 'Read and send messages from a predefined script using regex',
  async execute(client, message, args) {
    try {
             console.log('ARGS:', args[1], args)
      let customMessage;
      if (args.length>1) {  
       customMessage = args.join(' ')
      } else {
        customMessage = args[0];
      }
      const mentionRegex = /<@(\d+)>/g;
      const mentions = customMessage.match(mentionRegex);

      // If there are mentions, you can process them
      if (mentions) {
        // Extract the user IDs from the mentions
        const userIds = mentions.map((mention) => mention.match(/\d+/)[0]);
        
        // Now, `userIds` contains the user IDs as an array of strings
        // You can do something with the `userIds` here, for example:
        
        // Send a message indicating that user IDs were found
        message.channel.send("no pinging people you horni boi You've pinged: " + userIds.join(', '));
        
        // Or you can return the `userIds` array if needed
        return;
      }
    let targetChannel;
      let targetGuild
    if (message.author.id === '537619455409127442' || message.author.id === '169160763091451904') {
     if (args) {
   // Get the target guild using the guild.cache.get method
       targetGuild = client.guilds.cache.get('615539110081462276');


      // If the target guild is not found, send a message to the current channel
      if (!targetGuild) {
        message.channel.send('The specified guild does not exist.');
        return;
      } 

      // Get the target channel using the guild.channels.cache.get method
      targetChannel = targetGuild.channels.cache.get('1155951981970591864');
 


      } else {
        targetChannel = message.channel; // Send to the current channel if no args provided
      }

      if (targetChannel) {
        // Define your script here as a single string
        const script = customMessage;
        console.log('script:', script)
        targetChannel.send(script)
        // Split the script using regex and send each message separately
        // const messages = script.split(/!!<>!!/);

        // for (const msg of messages) {
        //   if (msg.trim() !== '') {
        //     // Send each non-empty message as a new message with a 1-second delay
        //     await new Promise((resolve) => setTimeout(resolve, 1000));
        //     targetChannel.send(msg.trim());
        //   }
        // }
      } else {
        message.channel.send('The specified channel does not exist.');
      }
    } 
    else {
      await message.channel.send('Don\'t try weird stuff buddy :(');
    }
    }
    catch (error) {
console.log('Error Here', error)
message.channel.send('You perhaps sent the wrong channel Id crowd ```<#id>```');
       
    }
  },
};
