///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
///⊱─>UDAH DI KASIH NO ENC MASIH BELUM SUBSCRIBE PARAH<──⊰///HERMAN CHANEL
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./herman.js')
nocache('./herman.js', module => console.log(`${module} telah di update !!`))

const starts = async (herman = new WAConnection()) => {
    herman.logger.level = 'warn'
    herman.version = [2, 2142, 12]
    herman.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await herman.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    herman.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./session.json') && herman.loadAuthInfo('./session.json')
    herman.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    herman.on('open', () => {
        success('2', 'bot Sudah Connet')
    })
    await herman.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(herman.base64EncodedAuthInfo(), null, '\t'))

    herman.on('chat-update', async (message) => {
        require('./herman.js')(herman, message, _welkom)
    })
herman.on("group-participants-update", async (anu) => {
    try {
      groupMet = await herman.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await herman.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await herman.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(herman.user.jid)) {
        herman.sendMessage(anu.jid, "Halo Saya Bot Ketik .menu Untuk Mengakses", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(herman.user.jid)) {
             const mdata = await herman.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await herman.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await herman.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = herman.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Hallo @${num.split('@')[0]}, \n• _Nomor Kamu_ : *${num.split('@')[0]}*\n• _Bio Kamu_ : *${thu.status}*\n• _Member Group_ : *${memeg}*\n\n Selamat Datang di Grup ${mdata.subject}`
                tekss = `Semoga Betah\n*${time_wel} -  ${time_welc}* \n© _Herman Botz_ 2022`
                welcomeBut = [{buttonId:`#y`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${teks}`, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                herman.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(herman.user.jid)) {
                const mdata = await herman.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await herman.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = herman.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Sayonara* @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Selamat Tinggal Beban'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `*${time_wel} -  ${time_welc}* \n© _Herman Botz_ 2022`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                herman.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Subscribe Herman Chanel')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
