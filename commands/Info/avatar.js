const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "av",
  

  run: async(client, message, args) => {
    let target = message.mentions.members.first() || message.member
    if(!target) return message.reply(`No User Mentioned !`)
   const avembed = new MessageEmbed()
   .setTitle(`AVATAR OF ${target.user.tag}`)
   .setColor('RANDOM')
   .setImage(target.user.displayAvatarURL({dynamic : true , size: 4096 ,format:"png"}))
   .setFooter(`Requested by ${message.author.tag}`)
   .setTimestamp()
   
    message.channel.send(avembed);


  }

}