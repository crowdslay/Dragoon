module.exports = {
  name: 'slaywithargs',
  description: 'Split and send messages based on !!<>!!',
  async execute(client, message, args) {
    // Join the arguments into a single string
     if (message.author.id === '537619455409127442' || (message.author.id === '169160763091451904')) {
    const input = args.join(' ');

    // Split the input using !!<>!! as a delimiter
    const messages = input.split('!!<>!!');

    // Send each message separately
    for (const msg of messages) {
      if (msg.trim() !== '') {
        // Send each non-empty message as a new message
        message.channel.send(msg.trim());
      }
    }
     }
  },
};
