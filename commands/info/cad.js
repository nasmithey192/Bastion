/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: 'The CAD url can be found below.',

      footer: {
        text: `Type ${message.guild.prefix[0]}help to find out more about me.`
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'cad' ],
  enabled: true
};

exports.help = {
  name: 'cad',
  description: 'Get the %CAD$ url for the server.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'cad',
  example: []
};
