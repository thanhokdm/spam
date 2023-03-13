const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot1'];
var roleID5 = ayarlar['roleID5'];
var img = ayarlar['img'];
var photovip = ayarlar['photovip'];
var randomgif = photovip[Math['floor']((Math['random']() * photovip['length']))];
module['exports'] = {
    name: 'spam',
    description: 'Spam Call Sex',
    type: 'CHAT_INPUT',
    cooldown: 1,
    options: [{
        name: 'phone',
        description: 'Nhap so dien thoai spam',
        required: true,
        type: 'STRING'
    }, {
        name: 'threads',
        description: 'Nhap so luong tin nhan',
        required: true,
        type: 'STRING'
      }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID5)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID5}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 Developer: NguyenThanh'
                })['setTimestamp']()]
            })
        };
        const _0xf396xa = _0xf396x8['options']['getString']('phone');
        const _0xf396x0 = _0xf396x8['options']['getString']('threads');
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'python methods/L7/SMS-V1.py '}${_0xf396xa}${' '}${_0xf396x0}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '🚀 **The Spam Was Sent To Phone** 🚀',
                value: `${' '}${_0xf396xa}${' '}`,
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: NguyenThanh', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setTitle']('**LOADING...**')['setImage']('https://media2.giphy.com/media/mBiXF8LBUMBmaiIrJj/giphy.gif?cid=5e21488601ae79b24c76a3829eb0d2140e77bfb0681ca3af&rid=giphy.gif')['setFooter']('\xA9 Developer: NguyenThanh', img)['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }
    }
