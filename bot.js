const mineflayer = require('mineflayer');
function createBot() {
  const bot = mineflayer.createBot({
    host: 'MCSharkSMP.aternos.me',
    port: 59439,
    username: 'SharkSMPBoT',
    version: '1.21.4',
    auth: 'offline'
  });

  bot.on('spawn', () => {
    console.log('Bot je uspješno ušao na server!');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', (reason) => {
    console.log('Razlog izbacivanja:', reason);
    console.log('Pokušavam ponovno spajanje za 5 sekundi...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Tehnička greška:', err.message);
  });
}

createBot();
