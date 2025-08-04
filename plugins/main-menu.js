import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises as fsPromises } from 'fs'
import { join } from 'path'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, __dirname, participants }) => {
  try {
    await m.react('🦠')

    let { exp, bank, registered } = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let groupUserCount = m.isGroup ? participants.length : '-'

    let perfil = await conn.profilePictureUrl(conn.user.jid, 'image')
      .catch(() => 'https://i.postimg.cc/qRqHnHp1/codmsacerdote.jpg')

    // Preparar el tag del usuario
    const userId = m.sender.split('@')[0]
    let taguser = `@${userId}`
    let phone = PhoneNumber('+' + userId)
    let pais = phone.getRegionCode() || 'Desconocido 🌐'

    const vids = [
      'https://files.cloudkuimages.guru/videos/r8mJOgGX.mp4',
      'https://files.cloudkuimages.guru/videos/r8mJOgGX.mp4',
      'https://files.cloudkuimages.guru/videos/r8mJOgGX.mp4'
    ]
    let videoUrl = vids[Math.floor(Math.random() * vids.length)]

    const header = [
      `╔═━★•°*"'*°•★━═╗`,
      `    ✦ ꧁𝐖𝐞𝐥𝐜𝐨𝐦𝐞꧂ ✦`,
      `╚═━★•°*"'*°•★━═╝`
    ].join('\n')

    const user = global.db.data.users[m.sender] || {};
    const country = user.country || '';
    const isPremium = user.premium || false;


    const channelRD = { 
      id: '0029VbA877dDDmFSafT2xI42@newsletter', 
      name: 'Canal Oficial RyzeMD-BOT'
    }


    const metaMsg = {
      quoted: global.fakeMetaMsg,
      contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          serverMessageId: 100,
          newsletterName: channelRD.name
        },
        externalAdReply: {
          title: 'Ryze Bot',
          body: '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ David',
          mediaUrl: null,
          description: null,
          previewType: "PHOTO",
          thumbnailUrl: 'https://i.postimg.cc/qRqHnHp1/codmsacerdote.jpg',
          sourceUrl: 'https://www.instagram.com/xrljose/',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }

    const body = `
*👤 Hola* 
${taguser}

*⏱️ Uptime:*
> ${uptime}

*👥 En este chat:*
> ${groupUserCount}

*🔐 Registrado:* 
> ${registered ? '✅' : '❌'}


*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ──ׄ*
*【𝕷 𝖎 𝖘 𝖙 𝖆 - 𝕯𝖊 - 𝕮 𝖔 𝖒 𝖆 𝖓 𝖉 𝖔 𝖘】*
┏━━━━━━━━━━━━━━━━━⪩
┃❀ 「 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 」 ❀
┃🦠 .menu
┃🦠 .runtime
┃🦠 .admins
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢ó𝐧 」 ❃
┃🦠 .creador
┃🦠 .dash
┃🦠 .ds
┃🦠 .status
┃🦠 .horario
┃🦠 .infobot
┃🦠 .ping
┃🦠 .reportar
┃🦠 .sistema
┃🦠 .speed
┃🦠 .speedtest
┃🦠 .donar
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐨 」 ❃
┃🦠 .unreg
┃🦠 .marry
┃🦠 .setgenre
┃🦠 .delgenre
┃🦠 .setbirth
┃🦠 .delbirth
┃🦠 .setdesc
┃🦠 .deldesc
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐃𝐢𝐯𝐞𝐫𝐬𝐢ó𝐧 」 ❃
┃🦠 .consejo
┃🦠 .divorce
┃🦠 .doxear
┃🦠 .parejas
┃🦠 .pareja5
┃🦠 .formartrio
┃🦠 .iqtest
┃🦠 .gay2
┃🦠 .meme
┃🦠 .morse
┃🦠 .nombreninja
┃🦠 .pajeame
┃🦠 .personalidad
┃🦠 .piropo
┃🦠 .pokedex
┃🦠 .pregunta
┃🦠 .ship
┃🦠 .top
┃🦠 .zodiac


┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐉𝐮𝐞𝐠𝐨𝐬 」 ❃
┃🦠 .ttt
┃🦠 .ahorcado
┃🦠 .math
┃🦠 .ppt
┃🦠 .pvp
┃🦠 .sopa
┃🦠 .ahorcado
┃🦠 .slot
┃🦠 .cf

┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐄𝐦𝐨𝐱‑𝐀𝐧𝐢𝐦𝐞 」 ❃
┃🦠 .angry
┃🦠 .bath
┃🦠 .bite
┃🦠 .bleh
┃🦠 .blush
┃🦠 .bored
┃🦠 .cafe
┃🦠 .cry
┃🦠 .cuddle
┃🦠 .dance
┃🦠 .drunk
┃🦠 .eat
┃🦠 .facepalm
┃🦠 .happy
┃🦠 .hello
┃🦠 .hug
┃🦠 .kill
┃🦠 .kiss
┃🦠 .kiss2
┃🦠 .laugh
┃🦠 .lick
┃🦠 .love2
┃🦠 .patt
┃🦠 .poke
┃🦠 .pout
┃🦠 .preg
┃🦠 .punch
┃🦠 .run
┃🦠 .sad
┃🦠 .scared
┃🦠 .seduce
┃🦠 .shy
┃🦠 .slap
┃🦠 .sleep
┃🦠 .smoke
┃🦠 .think
┃🦠 .undress
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐑𝐨𝐥𝐥𝐰𝐚𝐢𝐟𝐮𝐬 」 ❃
┃🦠 .rw
┃🦠 .topws
┃🦠 .claim
┃🦠 .harem
┃🦠 .regalar
┃🦠 .vote
┃🦠 .wvideo
┃🦠 .wimage
┃🦠 .winfo
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐄𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 」 ❃
┃🦠 .bank
┃🦠 .crimen
┃🦠 .depositar
┃🦠 .minar
┃🦠 .retirar
┃🦠 .ruleta
┃🦠 .trabajar
┃🦠 .transfer
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐑‑𝐏‑𝐆 」 ❃
┃🦠 .cofre
┃🦠 .daily
┃🦠 .cazar
┃🦠 .halloween
┃🦠 .heal
┃🦠 .lb
┃🦠 .inventario
┃🦠 .mazmorra
┃🦠 .monthly
┃🦠 .weekly
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐒𝐞𝐫𝐛𝐨𝐭/𝐂𝐨𝐝𝐞 」 ❃
┃🦠 .jadibot
┃🦠 .deletebot
┃🦠 .stop
┃🦠 .serbot
┃🦠 .serbot --code
┃🦠 .token
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫𝐞𝐬 」 ❃
┃🦠 .githubsearch
┃🦠 .gnula
┃🦠 .googlesearch
┃🦠 .npmjs
┃🦠 .tiktoksearch
┃🦠 .wikis
┃🦠 .xnxxsearch
┃🦠 .ytsearch
┃🦠 .imagen
┃🦠 .stickergif
┃🦠 .gif
┃🦠 .getsticker
┃🦠 .spotplay
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬 」 ❃
┃🦠 .animedl
┃🦠 .facebook
┃🦠 .fb
┃🦠 .gdrive
┃🦠 .gitclone
┃🦠 .instagram2
┃🦠 .ig2
┃🦠 .mangad
┃🦠 .mediafire
┃🦠 .mega
┃🦠 .npmdl
┃🦠 .aptoide
┃🦠 .pinterest
┃🦠 .play
┃🦠 .tiktokrandom
┃🦠 .tiktokimg
┃🦠 .spotify
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐀𝐢/𝐈𝐚 」 ❃
┃🦠 .demo
┃🦠 .gemini
┃🦠 .ia
┃🦠 .iapolli
┃🦠 .gptpolli
┃🦠 .gptpolli2
┃🦠 .simi
┃🦠 .flux
┃🦠 .gemini
┃🦠 .llama
┃🦠 .genimg
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐆𝐫𝐮𝐩𝐨𝐬 」 ❃
┃🦠 .warn
┃🦠 .warns
┃🦠 .delwarn
┃🦠 .resetwarn
┃🦠 .add
┃🦠 .admins
┃🦠 .delete
┃🦠 .demote
┃🦠 .encuesta
┃🦠 .hidetag
┃🦠 .infogrupo
┃🦠 .kick
┃🦠 .link
┃🦠 .promote
┃🦠 .revoke
┃🦠 .setbye
┃🦠 .Setdesc
┃🦠 .setname
┃🦠 .setwelcome
┃🦠 .tagall
┃🦠 .convocar
┃🦠 .everyone
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 」 ❃
┃🦠 .cal
┃🦠 .clima
┃🦠 .fake
┃🦠 .hd
┃🦠 .readmore
┃🦠 .spamwa
┃🦠 .ssweb
┃🦠 .tamaño
┃🦠 .upmf
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨𝐫𝐞𝐬 𝐝𝐞 𝐀𝐮𝐝𝐢𝐨𝐬 」
┃🦠 .bass
┃🦠 .blown
┃🦠 .deep
┃🦠 .earrape
┃🦠 .fast
┃🦠 .fat
┃🦠 .nightcore
┃🦠 .reverse
┃🦠 .robot
┃🦠 .slow
┃🦠 .smooth
┃🦠 .tupai
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐢𝐝𝐨𝐫𝐞𝐬 」 ❃
┃🦠 .ibb
┃🦠 .togifaud
┃🦠 .tourl
┃🦠 .tourlAll
┃🦠 .postimg
┃🦠 .tovideo
┃🦠 .tts
┃🦠 .tts2
┃🦠 .tts3
┃🦠 .tourl2
┃🦠 .niggafy
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃ 「 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 」 ❃
┃🦠 .emojimix
┃🦠 .pfp
┃🦠 .qc
┃🦠 .sticker
┃🦠 .toimg
┗━━━━━━━━━━━━━━━━━⪩

┏━━⪩「 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐜𝐢ó𝐧 」⪨
┃🦠 .autoadmin
┃🦠 .banchat
┃🦠 .banuser
┃🦠 .grupocrear
┃🦠 .join
┃🦠 .unbanchat
┃🦠 .unbanuser
┗━━━━━━━━━━━━━━━━━⪩

┏━━⪩「 𝐂𝐫𝐞𝐚𝐝𝐨𝐫/𝐎𝐰𝐧𝐞𝐫 」⪨
┃🦠 .reactch
┃🦠 .listafk
┃🦠 .expired
┃🦠 .addyenes
┃🦠 .addprem
┃🦠 .copia
┃🦠 .broadcast
┃🦠 .bc
┃🦠 .mgp
┃🦠 .broadcastgroup
┃🦠 .bcgc
┃🦠 .bcgc2
┃🦠 .cleanf­iles
┃🦠 .cleartmp
┃🦠 .setcmd
┃🦠 .deletefile
┃🦠 .delexpired
┃🦠 .delvn
┃🦠 .delmsg
┃🦠 .delimg
┃🦠 .delsticker
┃🦠 .delprem
┃🦠 .reunion
┃🦠 .removeowner
┃🦠 .dsowner
┃🦠 .fetch
┃🦠 .getplugin
┃🦠 .groups
┃🦠 .grouplist
┃🦠 .kickall
┃🦠 .nuevabiobot
┃🦠 .nuevafotobot
┃🦠 .nuevonombrebot
┃🦠 .prefix
┃🦠 .resetpersonajes
┃🦠 .resetprefix
┃🦠 .restart
┃🦠 .saveplugin
┃🦠 .update
┃🦠 .actualizar
┃🦠 .quitarcoin
┃🦠 .quitarbank
┃🦠 .>*
┃🦠 .=>*
┗━━━━━━━━━━━━━━━━━⪩

`.trim()

    // Unir header + body
    const menu = `${header}\n${body}`

    // Configurar datos para el mensaje
    const botname = 'RyzeMD-BOT'
    const textbot = 'David RyZe'
    const banner = perfil
    const redes = 'https://whatsapp.com/channel/0029VbA877dDDmFSafT2xI42'
    
    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: body,
      gifPlayback: true,
      mentions: [m.sender],  // Agregamos el array de menciones
      ...metaMsg
    })

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, { 
      text: `✘ Error al enviar el menú: ${e.message}`,
      mentions: [m.sender]  // También incluimos menciones en el mensaje de error
    }, { 
      quoted: metaMsg 
    })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu','help','menú','allmenu','menucompleto']
handler.register = true
export default handler

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
