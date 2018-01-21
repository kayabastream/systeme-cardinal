const discord = require('discord.js');

const client = new discord.Client();


client.login(process.env.token).then(ok => console.log('ok'));

client.on("message", message =>{
  if(message.content.startsWith('sc:')){
    message.reply('Un problème avec le VPS a causé la perte des données, principale, le créateur est actuellement en train de le recoder. Plus de détails ici : https://discord.gg/ZU7nYJj');
  }
 });

client.on('ready' =>{
  client.user.setStatus("dnd");
  client.user.setGame('Un bug dans Cardinal est en cours de réparation');
 });
