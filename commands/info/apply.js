/**
 * @file hello command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = (Bastion, message) => {
  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: 'The applications for Hybrid Gaming Network can be found below..',

      footer: {
        text: `**South Carolina Highway Patrol Application**
https://docs.google.com/forms/d/1vEmaZZUrlaNpvdFRgutCvGbQ_aqL_NztmM_zLSmcIQ4


**Civilian Application**
https://docs.google.com/forms/d/1cUXOBbLtStUg8Q3JLtdbSdjcL5voWF_agFIHbjucLX4


**South Carolina Dispatcher Application**
https://docs.google.com/forms/d/1QIs0tUBmXqsmQ0g7e4b8OFQWqAEgSC_tGWgcnv_MFgk


**South Carolina Fire Department**
https://docs.google.com/forms/d/1BFyZzdTeDbAk_rqGOCN-ivnj1hwSRUSqUfn97ALBwQs`
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [ 'apply' ],
  enabled: true
};

exports.help = {
  name: 'hello',
  description: 'Get the application links.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'apply',
  example: []
};
