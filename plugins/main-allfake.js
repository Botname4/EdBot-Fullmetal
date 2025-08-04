import pkg from '@whiskeysockets/baileys'
import fs, { readFileSync } from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg


var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

global.creador = 'Wa.me/15614809253'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/15614809253'
global.namechannel = '┊      𝙴͜𝙳͜𝙳𝙱͜𝙾͜𝚃͜ - 𝙵͜𝚄͜𝙻͜𝙻 𝙼͜𝙴͜𝚃͜𝙰͜𝙻 ░ ꒰ 𝙲ʜᴀɴɴᴇʟ ꒱ 🍁'
global.namegrupo = '[☆] 𝐸𝑑𝐵𝑜𝑡 - 𝐹𝑢𝑙𝑙 𝑀𝑒𝑡𝑎𝑇𝑒𝑎𝑚 [☆]'
global.namecomu = 'RyzeMD'
global.listo = '🍬 *🅰🆀🆄🅸́ 🆃🅸🅴🅽🅴🆂 ฅ^•ﻌ•^ฅ*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://ucarecdn.com/d9384505-fd98-4cd4-8a74-29b85a47227d/071cb85f7f00.jpg')

global.idchannel = '120363400595401085@newsletter'
global.canalIdM = ["120363400595401085@newsletter"]
global.canalNombreM = ["┊      𝙴͜𝙳͜𝙳͜𝙱͜𝙾͜𝚃͜ - 𝙵͜𝚄͜𝙻͜𝙻 𝙼͜𝙴͜𝚃͜𝙰͜𝙻 ░ ꒰ 𝙲ʜᴀɴɴᴇʟ ꒱ 🍁̷⪨"]
global.channelRD = await getRandomChannel()

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})


global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠️'

global.emoji = '🌟'
global.emoji2 = '🔥'
global.emoji3 = '💎'
global.emoji4 = '🎉'
global.emoji5 = '🚀'
global.emoji6 = '✨'
global.emoji7 = '🦄'
global.emoji8 = '🍀'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8].getRandom()

global.wait = '⏳ Por favor espera, procesando tu solicitud...';
global.waitt = '✨ Un momento, preparando algo especial para ti...';
global.waittt = '🦾 Dame unos segundos, trabajando en tu petición...';
global.waitttt = '🚀 Espera un poco, pronto tendrás tu respuesta...';

var grupo = ''
var canal = ''  
var canal2 = ''
var git = '' 
var github = '' 
let correo = ''

global.redes = [canal, canal2, git, github, correo].getRandom()

let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.packsticker = `▸ ${dia}\n▸ ${tiempo}\n▸ ${fecha}\n▸ ${botname}\n`
global.packsticker2 = `\n© ᥴrᥱᥲ𝗍ᥱძ ᑲᥡ EdBot Team`
global.metanombre = 'Meta AI'
  
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fake = {
  contextInfo: {
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.canalIdM,
      newsletterName: global.canalNombreM,
      serverMessageId: -1
    }
  }
}, { quoted: m }

global.metaai = {
  key: {
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    fromMe: false,
    id: "Halo"
  },
  message: {
    contactMessage: {
      displayName: `${metanombre}`,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${metanombre},;;;\nFN:${metanombre},\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Contacto\nitem2.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem2.X-ABLabel:Usuario\nEND:VCARD`,
      jpegThumbnail: null,
      thumbnail: null,
      sendEphemeral: true
    }
  },
  participant: "0@s.whatsapp.net"
}

global.icono = [
'hhttps://files.cloudkuimages.guru/images/8WspDg5J.jpg',
].getRandom()


global.rcanal1 = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: idchannel, serverMessageId: 100, newsletterName: namechannel, }, externalAdReply: { title: packname, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

global.rcanal2 = { contextInfo: { externalAdReply: { title: botname, mediaType: 2, previewType: "VIDEO", thumbnail: catalogo, mediaUrl: 'https://youtu.be/FKVuVneuwtg', sourceUrl: gp1 }}} 

global.rcanal = {
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: idchannel,
      serverMessageId: 100,
      newsletterName: namechannel
    },
    externalAdReply: {
      title: botname,
      mediaType: 1,
      previewType: "PHOTO",
      thumbnailUrl: 'https://files.cloudkuimages.guru/images/HCEGmrFd.jpg',
      mediaUrl: null,
      sourceUrl: gp1,
      renderLargerThumbnail: true
    }
  }
} 

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}
