/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: 'The Hybrid Gaming Network penal code can be found below.',

      footer: {
        text: `https://docs.google.com/document/d/1_YkP0S6YOaOlne8YVA5kawv4SVKcrWVqtEAFngAmhNE/edit?usp=sharing`
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'penalcode' ],
  enabled: true
};

exports.help = {
  name: 'penalcode',
  description: 'Get the penal code.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'penalcode',
  example: []
};
