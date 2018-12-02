/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,

      footer: {
        text: `Meetings are at 6:30 on Sundays unless otherwise posted.`
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'meetings' ],
  enabled: true
};

exports.help = {
  name: 'meetings',
  description: 'Get the regular meeting times.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'meetings',
  example: []
};
