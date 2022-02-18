///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//SETTING//
autoread = setting.autoread
autocomposing = setting.autocomposing
autorecording = setting.autorecording
publik = true
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
owner = setting.OwnerNumber//ubah di file setting.json
botname = setting.BotName//ubah di file setting.json
ownername = setting.OwnerName//ubah di file setting.json
fake = setting.Fake
pe = 'https://instagram.com/cal_me_herman?utm_medium=copy_'
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
ZeksKey = 'apivinz'
lolkey = '682aeab645ed61cf137cf971'
Lolhuman = 'DhenxsKey1'
AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
// ࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
const fakebc = fs.readFileSync ('./image/fakebc.jpg')
const fakeimage = fs.readFileSync ('./image/herman.jpg')
const fakeherman = fs.readFileSync ('./media/thumb.jpg')

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
		
module.exports = herman = async (herman, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocke
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = herman.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? herman.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await herman.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? herman.user.jid : herman.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? herman.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await herman.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

mess = {
donasi: '🛒━━━━━ • ஜ • ❈ • ஜ • ━━━━━🛒\nDonasi Seiklas Nya ;) Ketik #owner Kalo Mau Donasi Ya\n🛒━━━━━ • ஜ • ❈ • ஜ • ━━━━━🛒',
wait: '╔WAIT╛SEDANG DI PROSES',
eror: '╔MAAF╛TERJADI KESALAHAN',
success: '╔DONE╛',
error: {
stick: '╔REPLY STIKER DENGAN BENAR!╛',
Iv: '╔LINK INVALID!╛'
},
only: {
group: '╔MAAF╛FITUR INI HANYA UNTUK DI DALAM GRUP!',
owner: '╔MAAF╛FITUR INI KHUSUS OWNER BOT',
admin: '╔MAAF╛FITUR INI KHUSUS ADMIN GROUP',
Badmin: '╔MAAF╛JADIKAN BOT SEBAGAI ADMIN'
}
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            herman.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
herman.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await herman.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await herman.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await herman.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = herman.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return herman.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
herman.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
herman.sendMessage(hehe, teks, text)
}
const fakeyt = (teks) => {
herman.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${botname}`,
                "mediaType": "10",
                "mediaUrl": `${pe}`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fakeimage,
                "sourceUrl": `${pe}`,
},mentionedJid:[sender]}, quoted : mek})
};
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? herman.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : herman.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			herman.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            herman.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/herman.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            herman.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/herman.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            status: 1,
                            surface : 1,
                            message: `囧 𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakeherman, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    herman.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

const hideTag = async function(from, text){
           let anu = await herman.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           herman.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/herman.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakeyt(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
herman.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
fakeyt('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
herman.groupRemove(from, [sender])
}     

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

if (autoread){
herman.chatRead(from, "read")
} else if (autocomposing) {
herman.updatePresence(from, Presence.composing)
} else if (autorecording) {
herman.updatePresence(from, Presence.recording)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam🌑'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang🌒'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore🏝️'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️☀️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi🌄'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam💫'
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'menu':
fakeyt(`Menampilkan Menu..`)
teks = `hai Saya ${botname} 👋

┌─❏ *Info Bot* 
│🔮 *Nama Bot* : ${botname}
│🔮 *Owner* : ${ownername}
│🔮 *Batrei* : Tidak Terdeteksi
│🔮 *Version* : 1.0.0
└─────────────⎘


Dj Ghani Ghani - Viral Tiktok mp3

03:42 ━━━━━━●───── 05:20
⇆ㅤ    ◁ㅤ     ❚❚     ㅤ▷ ㅤ  ㅤ↻﻿`
img = fs.readFileSync('./image/herman.jpg')
trans = `Dilarang Spam Bot!! Jeda Minimal 5detik Spam/Call Auto Baned!.Mohon Hargai Creator Bot`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'MENU' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: 'DONASI' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but, {quoted: ftrol})
break
case 'allmenu':
menunya = `⌜𝐺𝑅𝑂𝑈𝑃 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}antilink _on|off_
𖥂 ${prefix}antivirtex _on|off_
𖥂 ${prefix}welcome _on|off_
𖥂 ${prefix}group _buka|tutup_
𖥂 ${prefix}promote _@tag|reply_
𖥂 ${prefix}demote _@tag|reply_
𖥂 ${prefix}add _628xx_
𖥂 ${prefix}kick _@tag|reply
𖥂 ${prefix}setpp _reply|cap_
𖥂 ${prefix}setdesc _teks_
𖥂 ${prefix}setname _teks_
𖥂 ${prefix}hidetag _teks_
𖥂 ${prefix}linkgrup
𖥂 ${prefix}infogrup
𖥂 ${prefix}listonline
𖥂 ${prefix}resetlinkgrup

⌜𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}stiker _reply foto_
𖥂 ${prefix}ttp _text_
𖥂 ${prefix}attp _text_
𖥂 ${prefix}toimg _reply stiker_
𖥂 ${prefix}patrick

⌜𝑂𝑊𝑁𝐸𝑅 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}owner
𖥂 ${prefix}bc _Teks_
𖥂 ${prefix}public
𖥂 ${prefix}self

⌜𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}ytmp3 _send link yt_
𖥂 ${prefix}ytmp4 _send link yt_
𖥂 ${prefix}tiktok _send link tt_

⌜𝐻𝐸𝑊𝐴𝑁 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}fox
𖥂 ${prefix}dog
𖥂 ${prefix}cat
𖥂 ${prefix}panda
𖥂 ${prefix}panda1
𖥂 ${prefix}bird
𖥂 ${prefix}koala

⌜𝐻𝐸𝑁𝑇𝐴𝐼 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}art
𖥂 ${prefix}bts
𖥂 ${prefix}exo
𖥂 ${prefix}elf
𖥂 ${prefix}loli
𖥂 ${prefix}neko
𖥂 ${prefix}waifu
𖥂 ${prefix}shota
𖥂 ${prefix}husbu
𖥂 ${prefix}sagiri
𖥂 ${prefix}shinobu
𖥂 ${prefix}megumin
𖥂 ${prefix}wallnime
𖥂 ${prefix}chiisaihentai
𖥂 ${prefix}trap
𖥂 ${prefix}blowjob
𖥂 ${prefix}yaoi
𖥂 ${prefix}ecchi
𖥂 ${prefix}hentai
𖥂 ${prefix}ahegao
𖥂 ${prefix}hololewd
𖥂 ${prefix}sideoppai
𖥂 ${prefix}animefeets
𖥂 ${prefix}animebooty
𖥂 ${prefix}animethighss
𖥂 ${prefix}hentaiparadise
𖥂 ${prefix}animearmpits
𖥂 ${prefix}hentaifemdom
𖥂 ${prefix}lewdanimegirls
𖥂 ${prefix}biganimetiddies
𖥂 ${prefix}animebellybutton
𖥂 ${prefix}hentai4everyone
𖥂 ${prefix}bj
𖥂 ${prefix}ero
𖥂 ${prefix}cum
𖥂 ${prefix}feet
𖥂 ${prefix}yuri
𖥂 ${prefix}trap
𖥂 ${prefix}lewd
𖥂 ${prefix}feed
𖥂 ${prefix}eron
𖥂 ${prefix}solo
𖥂 ${prefix}gasm
𖥂 ${prefix}poke
𖥂 ${prefix}anal
𖥂 ${prefix}holo
𖥂 ${prefix}tits
𖥂 ${prefix}kuni
𖥂 ${prefix}kiss
𖥂 ${prefix}erok
𖥂 ${prefix}smug
𖥂 ${prefix}baka
𖥂 ${prefix}solog
𖥂 ${prefix}feetg
𖥂 ${prefix}lewdk
𖥂 ${prefix}waifu
𖥂 ${prefix}pussy
𖥂 ${prefix}femdom
𖥂 ${prefix}cuddle
𖥂 ${prefix}hentai
𖥂 ${prefix}eroyuri
𖥂 ${prefix}cum_jpg
𖥂 ${prefix}blowjob
𖥂 ${prefix}erofeet
𖥂 ${prefix}holoero
𖥂 ${prefix}classic
𖥂 ${prefix}erokemo
𖥂 ${prefix}fox_girl
𖥂 ${prefix}futanari
𖥂 ${prefix}lewdkemo
𖥂 ${prefix}wallpaper
𖥂 ${prefix}pussy_jpg
𖥂 ${prefix}kemonomimi
𖥂 ${prefix}nsfw_avatar
𖥂 ${prefix}ngif
𖥂 ${prefix}nsfw_neko_gif
𖥂 ${prefix}random_hentai_gif

⌜𝐴𝑆𝑈𝑃𝐴𝑁 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}asupangeayubi
𖥂 ${prefix}asupanaura
𖥂 ${prefix}asupanbunga
𖥂 ${prefix}asupanayu
𖥂 ${prefix}asupancaca

⌜𝑇𝐴𝐺 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}ganteng
𖥂 ${prefix}cantik
𖥂 ${prefix}jelek
𖥂 ${prefix}goblok
𖥂 ${prefix}bego
𖥂 ${prefix}pinter
𖥂 ${prefix}jago
𖥂 ${prefix}nolep
𖥂 ${prefix}monyet 	 
𖥂 ${prefix}babi
𖥂 ${prefix}beban
𖥂 ${prefix}baik
𖥂 ${prefix}jahat
𖥂 ${prefix}anjing
𖥂 ${prefix}haram
𖥂 ${prefix}kontol
𖥂 ${prefix}pakboy
𖥂 ${prefix}pakgirl
𖥂 ${prefix}wibu
𖥂 ${prefix}hebat
𖥂 ${prefix}sadboy
𖥂 ${prefix}sadgirl 

⌜𝐴𝑁𝐼𝑀𝐸 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}husbu
𖥂 ${prefix}loli
𖥂 ${prefix}elf
𖥂 ${prefix}waifu
𖥂 ${prefix}ppcouple
𖥂 ${prefix}uniform
𖥂 ${prefix}cuckold
𖥂 ${prefix}zettairyouiki
𖥂 ${prefix}sfwneko
𖥂 ${prefix}sao
𖥂 ${prefix}cosplay
𖥂 ${prefix}milf
𖥂 ${prefix}lovelive
𖥂 ${prefix}hsdxd
𖥂 ${prefix}wallml

⌜𝐼𝑆𝐿𝐴𝑀 𝑀𝐸𝑁𝑈⌟
𖥂 ${prefix}listsurah
𖥂 ${prefix}asmaulhusna
𖥂 ${prefix}alquran 
𖥂 ${prefix}alquran 
𖥂 ${prefix}alquran 
𖥂 ${prefix}alquranaudio 
𖥂 ${prefix}alquranaudio 
𖥂 ${prefix}kisahnabi 
𖥂 ${prefix}jadwalsholat 

⌜𝑀𝐴𝐾𝐸𝑅 𝑀𝐸𝑁𝑈⌟ (Sukak Eror)
𖥂 ${prefix}blackpink
𖥂 ${prefix}neon
𖥂 ${prefix}greenneon
𖥂 ${prefix}advanceglow
𖥂 ${prefix}futureneon
𖥂 ${prefix}sandwriting
𖥂 ${prefix}sandsummer
𖥂 ${prefix}sandengraved
𖥂 ${prefix}metaldark
𖥂 ${prefix}neonlight
𖥂 ${prefix}holographic
𖥂 ${prefix}text1917
𖥂 ${prefix}minion
𖥂 ${prefix}deluxesilver
𖥂 ${prefix}newyearcard
𖥂 ${prefix}bloodfrosted
𖥂 ${prefix}halloween
𖥂 ${prefix}blackpink 
𖥂 ${prefix}pipe  
𖥂 ${prefix}heloween  
𖥂 ${prefix}heloween2  
𖥂 ${prefix}horor  
𖥂 ${prefix}nulis  
𖥂 ${prefix}sirkuit  
𖥂 ${prefix}discovery  
𖥂 ${prefix}fiction  
𖥂 ${prefix}8bit  
𖥂 ${prefix}demon  
𖥂 ${prefix}transformer  
𖥂 ${prefix}berry  
𖥂 ${prefix}leyered  
𖥂 ${prefix}thunder  
𖥂 ${prefix}magma  
𖥂 ${prefix}stone  
𖥂 ${prefix}neon3  
𖥂 ${prefix}glitch  
𖥂 ${prefix}glitch2  
𖥂 ${prefix}broken  
𖥂 ${prefix}nulis2  
𖥂 ${prefix}gradient  
𖥂 ${prefix}glossy  
𖥂 ${prefix}watercolor  
𖥂 ${prefix}multicolor  
𖥂 ${prefix}neondevil  
𖥂 ${prefix}underwater  
𖥂 ${prefix}bear  
𖥂 ${prefix}jokerlogo
𖥂 ${prefix}fireworksparkle
𖥂 ${prefix}natureleaves
𖥂 ${prefix}bokeh
𖥂 ${prefix}toxic
𖥂 ${prefix}strawberry
𖥂 ${prefix}box3d
𖥂 ${prefix}roadwarning
𖥂 ${prefix}breakwall
𖥂 ${prefix}icecold
𖥂 ${prefix}luxury
𖥂 ${prefix}cloud
𖥂 ${prefix}summersand
𖥂 ${prefix}horrorblood
𖥂 ${prefix}thunder

⌜𝐾𝑂𝐷𝐸 𝑀𝐸𝑁𝑈⌟
 𖥂 ${prefix}tts
 𖥂 ${prefix}kodenegara
 𖥂 ${prefix}kodebahasa`
img = fs.readFileSync('./image/herman.jpg')
trans = `halo Ka ${pushname} 👋`
but = [
          { buttonId: `${prefix}sewa`, buttonText: { displayText: 'Sewa Bot' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }
        ]
        sendButImage(from, trans, menunya, img, but, {quoted: ftrol})
                  break
case 'sewa':
case 'sewabot':
daftar = `Halo ka ${pushname}
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
• 🛒List Harga Sewa Botz🛒
💰 3k 1minggu
💰 5k permanen
minat ? Hubungi Owner Ketik #owner 
━━━━━ • ஜ • ❈ • ஜ • ━━━━━
`
herman.sendMessage(from, daftar, text, {quoted: ftrol})
                  break
case 'donasi':
fakeyt(mess.donasi)
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
			fakeyt(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await herman.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								herman.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await herman.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('Wait Tod')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								herman.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
					case 'ttp':  
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𖨇𝐻𝑒𝑟𝑚𝑎𝑛᭄ 𝐵𝑜𝑡𝑧𓅂 Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    herman.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           herman.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
            case 'toimg':
			if (!isQuotedSticker) return reply('Reply Sticker Tod')
			fakeyt(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await herman.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('gagal')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
case 'patrick':
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			herman.sendMessage(from, wkwk, sticker, {quoted: ftrol})
			break
case 'y':
fakeyt(`y`)
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
             case 'asupangeayubi':
             fakeyt(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await  herman.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
               herman.relayWAMessage(prep)
              break
             case 'asupanaura':
             fakeyt(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await  herman.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
               herman.relayWAMessage(prep)
              break
            case 'asupanbunga':
            fakeyt(mess.wait)
         
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await  herman.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
               herman.relayWAMessage(prep)
              break
            case 'asupanayu':
            
            fakeyt(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await  herman.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
               herman.relayWAMessage(prep)
              break
             case 'asupancaca':
             fakeyt(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await  herman.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
               herman.relayWAMessage(prep)
              break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
            case 'ppcouple':
            fakeyt(mess.wait)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
               herman.sendMessage(from, cowo, image, {quoted: ftrol, caption: 'Nih Versi Cowo Nya ^_^' })
               herman.sendMessage(from, cewe, image, {quoted: ftrol, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                fakeyt(mess.wait)
				 herman.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                  herman.sendMessage(from, swordartonline, image, {quoted: ftrol, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				fakeyt(mess.wait)
				  herman.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                  herman.sendMessage(from, highschooldxd, image, {quoted: ftrol, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				fakeyt(mess.wait)
				  herman.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                  herman.sendMessage(from, lovelive, image, {quoted: ftrol, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					fakeyt(mess.wait)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					 herman.sendMessage(from, qute6, image, { quoted: ftrol, caption: ':)' })
					break
            
            case 'milf':
            case 'cosplay':
            case 'wallml':
            fakeyt(mess.wait)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await  herman.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Creator Herman Chanel`,buttons,headerType:4}
              prep = await  herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
               herman.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'blackpink':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'pipe':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'heloween':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'heloween2':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'horor':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'nulis':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'sirkuit':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'discovery':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'fiction':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case '8bit':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'demon':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'transformer':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'berry':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'leyered':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'thunder':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'magma':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'stone':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'neon3':
 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'glitch':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'glitch2':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'herrypoter':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'embosed':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'broken':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'nulis2':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'gradient':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'glossy':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'watercolor':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'multicolor':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'neondevil':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'underwater':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
case 'bear':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Herman Chanel`)
fakeyt(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
 herman.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Logo maker' })
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                   case 'fox':  
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'dog':  
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'cat':
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'panda':  
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'panda1':  
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'bird': 
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
                   case 'koala':  
                   fakeyt(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                    herman.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: ftrol})
                   break
              
// Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
               
                fakeyt(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
                         herman.sendMessage(from, gambar, image, { quoted: ftrol })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
            
                fakeyt(mess.wait)
              
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                         herman.sendMessage(from, gambar, image, { quoted: ftrol })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                
                fakeyt(mess.wait)
                
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhuman}`).then((gambar) => {
                         herman.sendMessage(from, gambar, image, { quoted: ftrol })
                    })
                    break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'public':
if (!isOwner) return reply(mess.only.ownerB)
publik = true
fakeyt('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner) return reply(mess.only.ownerB)
publik = false
fakeyt('*Sukses mengubah mode self*')
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
           case 'exif':
                    fakeyt(mess.wait)
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                case 'listsurah':
                fakeyt(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                fakeyt(mess.wait)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
                    await lolhuman.sendMessage(from, ini_buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                fakeyt(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                fakeyt(mess.wait)
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                     case 'bahasa':
                     fakeyt(mess.wait)
                     herman.sendMessage(from, bahasa(), text, { quoted:ftrol })
                    break 
                    case 'kodenegara':
                    fakeyt(mess.wait)
					 herman.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    fakeyt(mess.wait)
				    if (args.length < 1) return  herman.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return  herman.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							 herman.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ban':
if (!isOwner) return reply(mess.only.ownerB)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
        case 'unban':
if (!isOwner) return reply(mess.only.ownerB)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
           case 'ttp':  
           fakeyt(mess.wait)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp  herman Botz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                     herman.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
          case 'attp':
          fakeyt(mess.wait)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
            herman.sendMessage(from, buffer, sticker, { quoted: mek })
            break
            case 'patrick':
            fakeyt(mess.wait)
			random = Math.floor(Math.random() * 6) + 1
		    wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${Lolhuman}`)
			 herman.sendMessage(from, wkwk, sticker, {quoted: ftrol})
			break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
herman.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh kontak Owner Ku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await herman.chats.all()
             if (isMedia && !herman.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(herman).replace('quotedM','m')).message.extendedTextMessage.contextInfo : herman
             bc100 = await herman.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             herman.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             herman.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${botname}`,
			"buttons": [
			{"buttonId": `${prefix}y`,
			"buttonText": {"displayText": "Okeh Bangg"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakebc,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break
case 'SCRIP':
case 'sc':
case 'scrip':
	        herman.sendMessage(from, 'Bot Ini Menggunakan Sc :\nhttps://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg',MessageType.text, {quoted: ftrol})
	         break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
herman.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
herman.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await herman.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
herman.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
herman.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
herman.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
herman.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
herman.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args.length < 1) return fakeyt('Yang mau di add siapa??')
if (args[0].startsWith('08')) return fakeyt('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
herman.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
fakeyt('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
herman.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
herman.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
herman.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
herman.groupUpdateSubject(from, `${body.slice(9)}`)
herman.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
herman.groupUpdateDescription(from, `${body.slice(9)}`)
herman.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await herman.downloadMediaMessage(encmedia)
herman.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await herman.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
herman.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
herman.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(herman.chats.get(ido).presences), herman.user.jid]
herman.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'waifu':
fakeyt(mess.wait)
waifu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`)
herman.sendMessage(from, waifu, image, { quoted: ftrol})
break
case 'husbu':
fakeyt(mess.wait)
husbu = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
herman.sendMessage(from, husbu, image, { quoted: ftrol})
break
case 'loli':
fakeyt(mess.wait)
loli = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
herman.sendMessage(from, loli, image, { quoted: ftrol})
break
case 'elf':
fakeyt(mess.wait)
elf = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
herman.sendMessage(from, elf, image, { quoted: ftrol})
break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
                    // Maker Menu //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                fakeyt(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Herman Chanel`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    herman.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
case 'ytmp3':
fakeyt(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
herman.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_audio)
herman.sendMessage(from, res, audio)
break
case 'ytmp4':
fakeyt(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${ini_link}&apikey=${ZeksKey}`)
get = anu.result
ini_txt =`Judul: ${get.title}\n`
ini_txt +=`Size: ${get.size}`
thu = await getBuffer(get.thumbnail)
herman.sendMessage(from, thu, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url_video)
herman.sendMessage(from, res, video)
break
case 'tiktok':
fakeyt(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/dddtik?url=${q}&apikey=noapikey`)
              result = `Title : ${data.title}`
              juhi = await getBuffer(data.thumb)
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.thumb))
              imageMsg = ( await herman.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: juhi})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              herman.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break

//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
	
    
//࿇ ══━━━━━━━━━━━━━━━━━━━━✥SUBSCRIBE HERMAN CHANEL✥━━━━━━━━━━━━━━━━━━━━━━━━══ ࿇
