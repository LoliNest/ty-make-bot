const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'poi') {
    	message.reply('apalo poi poi');
  	}
});
});

client.on('message', message => {
    if (message.content === 'pagi') {
    	message.reply('pagi juga, jangan lupa mandi ya..');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
