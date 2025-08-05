import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᑕOᒪᗩᗷOᖇᗩᗪOᖇᗴՏ Y ᑕᖇᗴáᗪOᖇ 🤖
global.owner = [
['584164137403', '☆꧁༒ĹєǤ𝒆𝐧𝐃༒꧂☆', true],
['15614809253', 'David-RyzeMD', true],
['5216641784469', 'BrayanOFC', true],
//BrayanOFC el mejor ATTE:Legend
];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᑎᑌᗰᗴᖇO ᗪᗴ OᗯᑎᗴᖇՏ ✨️
global.mods = ['573001533523', '573133374132'];
global.suittag = ['573001533523', '573133374132'];
global.prems = ['5212203832129'];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// IᑎᖴOᖇᗰᗩᑕIOᑎ ՏOᗷᖇᗴ El ᗷOT 🍁
global.libreria = 'Baileys';
global.nameqr = '𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭';
global.namebot = '𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭';
global.sessions = 'Sessions';
global.jadi = 'JadiBots';
global.roxyJadibts = true;

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᗰᗩᖇᑕᗩ ᗪᗴ ᗩᘜᑌᗩ 🗞️
global.packname = '𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭 )';
global.botname = '✦ 𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭 ✦༉';
global.wm = '𓆩⟡𓆪 𝑬𝒅𝑩𝒐𝒕–𝑭𝒖𝒍𝒍𝑴𝒆𝒕𝒂𝒍 𓆩⟡𓆪';
global.dev = '༺⟦ 𝙀𝓵𝕣𝑖𝐜 ⟧༻';
global.textbot = '𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭-Ai✦';
global.etiqueta = '𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭-Ai✦';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᗰOᑎᗴᗪᗩՏ 💸
global.moneda = 'dolares';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.namabot = '⫹⫺ 𝘌𝘥𝘉𝘰𝘵-𝘍𝘶𝘭𝘭𝘔𝘦𝘵𝘢𝘭'
global.v = '-'   
global.eror = "_ubo un error _"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = "✦ ───『"
global.dmenub = "│➭" 
global.dmenub2 = "│乂"
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = "⫹⫺ ───『"
global.cmenuh = "』─── ⬟"
global.cmenub = "│〆"
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.htki = '––––––『'
global.htka = '』––––––'
global.htjava = "⫹⫺"
global.comienzo = "• • ◕◕════"
global.fin = " • •"

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// Iᗰᗩᘜ3ᑎᗴՏ ᑎO TOᑕᗩᖇ 📥
global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [catalogo]

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

// ᘜᖇᑌᑭOՏ ᗪᗴL ᗷOT 🗂️
global.gp1 = 'https://whatsapp.com/channel/0029VbA877dDDmFSafT2xI42/'
global.channel2 = 'https://whatsapp.com/channel/0029VbA877dDDmFSafT2xI42'
global.md = 'https:/Botname4/EdBot-Fullmetal'
global.correo = 'logo diomarlugo405@gmail.com'
global.cn ='https://whatsapp.com/channel/0029VbA877dDDmFSafT2xI42';

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363312092804854@newsletter',
}

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

//✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
