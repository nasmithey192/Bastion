/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: 'The IP address for the server can be found below.',

      footer: {
        text: `185.249.196.5:32042`
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'ip' ],
  enabled: true
};

exports.help = {
  name: 'ip',
  description: 'Get the IP address for the server.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'ip',
  example: []
};
