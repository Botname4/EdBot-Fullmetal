import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let cumpleanos = user.birth || 'No especificado';
  let genero = user.genre || 'No especificado';
  let exp = user.exp || 0;
  let nivel = user.level || 0;
  let coins = user.coin || 0;
  let role = user.role || 'Esclavo';

  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');

  let txt = `
𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname}
ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs
╭┈ ↷
│ᰔᩚ Cliente » @${userId.split('@')[0]}
│★ ${moneda} » ${coins}
│✰ Experiencia » ${exp.toLocaleString()}
│✦ Nivel » ${nivel}
│✤ Rango » ${role}
│🜲 Propietario legend ⁩
╰─────────────────
ᴄʀᴇᴀ ᴜɴ sᴜʙ-ʙᴏᴛ ᴄᴏɴ ᴛᴜ ɴᴜᴍᴇʀᴏ ᴜᴛɪʟɪᴢᴀɴᴅᴏ *#serbot* o *#serbot code*

𖣠 *Sigue nuestro canal pata ver las actualizaciones*
https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t
꒷꒦﹋ٜ۪ꥇ໋۬꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦꒷꒷꒦﹋ٜ۪ꥇ໋۬꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦﹋ٜ۪ꥇ໋۬ ꒷꒦꒷

»  ⊹˚• \`Info-Bot\` •˚⊹

✎ Comandos para ver estado e información de la Bot.
ꨄ︎ *#help • #menu*
→ Ver la lista de comandos de la Bot.
ꨄ︎ *#uptime • #runtime*
→ Ver tiempo activo o en linea de la Bot.
ꨄ︎ *#serbot • #serbot code*
→ Crea una sesión de Sub-Bot.
ꨄ︎ *#bots • #sockets*
→ Ver la lista de Sub-Bots activos.
ꨄ︎ *#creador*
→ Ver en número oficial de creador de la Bot.
ꨄ︎ *#status • #estado*
→ Ver el estado actual de la Bot.
ꨄ︎ *#links • #grupos*
→ Ver los enlaces oficiales de la Bot.
ꨄ︎ *#infobot • #infobot*
→ Ver la información completa de la Bot.
ꨄ︎ *#sug • #newcommand*
→ Sugiere un nuevo comando.
ꨄ︎ *#solicitud • #sugerencia*
→ Envia una sugerencia al canal de la Bot.
ꨄ︎ *#p • #ping*
→ Ver la velocidad de respuesta del Bot.
ꨄ︎ *#reporte • #reportar*
→ Reporta alguna falla o problema de la Bot.
ꨄ︎ *#sistema • #system*
→ Ver estado del sistema de alojamiento.
ꨄ︎ *#speed • #speedtest*
→ Ver las estadísticas de velocidad de la Bot.
ꨄ︎ *#views • #usuarios*
→ Ver la cantidad de usuarios registrados en el sistema.
ꨄ︎ *#funciones • #totalfunciones*
→ Ver todas las funciones de la Bot.
ꨄ︎ *#ds • #fixmsgespera*
→ Eliminar archivos de sesión innecesarios.
ꨄ︎ *#editautoresponder*
→ Configurar un Prompt personalizado de la Bot.

»  ⊹˚• \`Buscadores\` •˚⊹

✎ Comandos para realizar búsquedas en distintas plataformas.
ꨄ *#tiktoksearch • #tiktoks*
→ Buscador de videos de tiktok.
ꨄ *#ytsearch • #yts*
→ Realiza búsquedas de Youtube.
ꨄ *#google*
→ Realiza búsquedas por Google.
ꨄ *#pin • #pinterest*
→ Buscador de imagenes de Pinterest.
ꨄ *#imagen • #image*
→ buscador de imagenes de Google.
ꨄ *#animesearch • #animess*
→ Buscador de animes de tioanime.
ꨄ *#animei • #animeinfo*
→ Buscador de capítulos de #animesearch.
ꨄ *#infoanime*
→ Buscador de información de anime/manga.

»  ⊹˚• \`Descargas\` •˚⊹

✎ Comandos de descargas para varios archivos.
ꨄ︎ *#tiktok • #tt*
→ Descarga videos de TikTok.
ꨄ︎ *#mediafire • #mf*
→ Descargar un archivo de MediaFire.
ꨄ︎ *#pinvid • #pinvideo* + [enlacé]
→ Descargar vídeos de Pinterest.
ꨄ︎ *#play • #play2*
→ Descarga música/video de YouTube.
ꨄ︎ *#fb • #facebook*
→ Descarga videos de Facebook.
ꨄ︎ *#ig • #instagram*
→ Descarga contenido de Instagram.
ꨄ︎ *#tts • #tiktoks* + [busqueda]
→ Buscar videos de tiktok 
ꨄ︎ *#ttimg • #ttmp3* + <url>
→ Descarga fotos/audios de tiktok. 
ꨄ︎ *#apk • #modapk*
→ Descarga un apk de Aptoide.
→ Descarga paquetes de NPMJs.
ꨄ︎ *#animelinks • #animedl*
→ Descarga Links disponibles de descargas.

»  ⊹˚• \`Gacha\` •˚⊹

✎ Comandos de gacha para reclamar y colecciónar personajes.
ꨄ︎ *#rollwaifu • #rw • #roll*
→ Waifu o husbando aleatorio.
ꨄ︎  *#claim • #c • #reclamar*
→ Reclamar un personaje.
ꨄ︎ *#harem • #waifus • #claims*
→ Ver tus personajes reclamados.
ꨄ︎ *#charimage • #waifuimage • #wimage* 
→ Ver una imagen aleatoria de un personaje.
ꨄ︎ *#charinfo • #winfo • #waifuinfo*
→ Ver información de un personaje.
ꨄ︎ *#givechar • #givewaifu • #regalar*
→ Regalar un personaje a otro usuario.
ꨄ︎ *#vote • #votar*
→ Votar por un personaje para subir su valor.
ꨄ︎ *#waifusboard • #waifustop • #topwaifus*
→ Ver el top de personajes con mayor valor.

»  ⊹˚• \`Stickers\` •˚⊹

✎ Comandos para creaciones de stickers etc.
ꨄ︎ *#sticker • #s*
→ Crea stickers de (imagen/video)
ꨄ︎ *#pfp • #getpic*
→ Obtén la foto de perfil de un usuario.
ꨄ︎ *#qc*
→ Crea stickers con texto o de un usuario.
ꨄ︎ *#toimg • #img*
→ Convierte stickers en imagen.
ꨄ *#brat*︎ 
→ Crea stickers con texto.
ꨄ︎ *#emojimix*
→ Fuciona 2 emojis para crear un sticker.
ꨄ︎ *#wm*
→ Cambia el nombre de los stickers.

»  ⊹˚• \`Herramientas\` •˚⊹

✎ Comandos de herramientas con muchas funciones.
ꨄ︎ *#fake • #fakereply*
→ Crea un mensaje falso de un usuario.
ꨄ︎ *#enhance • #remini • #hd*
→ Mejora la calidad de una imagen.
ꨄ︎ *#read • #readviewonce • #ver*
→ Ver imágenes de una sola vista.
ꨄ︎ *#whatmusic • #shazam*
→ Descubre el nombre de canciones o vídeos.
ꨄ︎ *#spamwa • #spam*
→ Envia spam aun usuario.
ꨄ︎ *#length • #tamaño*
→ Cambia el tamaño de imágenes y vídeos.
ꨄ︎ *#say • #decir* + [texto]
→ Repetir un mensaje.
ꨄ︎ *#translate • #traducir • #trad*
→ Traduce palabras en otros idiomas.

»  ⊹˚• \`Perfil\` •˚⊹

✎ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
ꨄ︎ *#reg • #verificar • #register*
→ Registra tu nombre y edad en el bot.
ꨄ︎ *#unreg*
→ Elimina tu registro del bot.
ꨄ︎ *#profile*
→ Muestra tu perfil de usuario.
ꨄ︎ *#marry* [mension / etiquetar]
→ Propón matrimonio a otro usuario.
ꨄ︎ *#divorce*
→ Divorciarte de tu pareja.
ꨄ︎ *#setgenre • #setgenero*
→ Establece tu género en el perfil del bot.
ꨄ︎ *#delgenre • #delgenero*
→ Elimina tu género del perfil del bot.
ꨄ︎ *#setbirth • #setnacimiento*
→ Establece tu fecha de nacimiento en el perfil del bot.
ꨄ︎ *#delbirth • #delnacimiento*
→ Elimina tu fecha de nacimiento del perfil del bot.
ꨄ︎ *#setdescription • #setdesc*
→ Establece una descripción en tu perfil del bot.
ꨄ︎ *#deldescription • #deldesc*
→ Elimina la descripción de tu perfil del bot.
ꨄ︎ *#lb • #lboard* + <Paginá>
→ Top de usuarios con más (experiencia, dragones y nivel).
ꨄ︎ *#level • #lvl* + <@Mencion>
→ Ver tu nivel y experiencia actual.
ꨄ︎ *#comprarpremium • #premium*
→ Compra un pase premium para usar el bot sin límites.
ꨄ︎ #confesiones • #confesar*
→ Confiesa tus sentimientos a alguien de manera anonima.

»  ⊹˚• \`Grupo\` •˚⊹

✎ Comandos de grupos para una mejor gestión de ellos.
ꨄ︎ *#config • #on*
→ Ver opciones de configuración de grupos.
ꨄ︎ *#hidetag*
→ Envia un mensaje mencionando a todos los usuarios
ꨄ︎ *#gp • #infogrupo*
→  Ver la Informacion del grupo.
ꨄ︎ *#linea • #listonline*
→ Ver la lista de los usuarios en linea.
ꨄ︎ *#link*
→ El bot envia el link del grupo.
ꨄ︎ *#admins • #admin*
→ Mencionar a los admins para solicitar ayuda.
ꨄ︎ *#restablecer • #revoke
→ Restablecer el enlace del grupo.
ꨄ︎ *#grupo • #group* [open / abrir]
→ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ꨄ︎ *#grupo • #gruop* [close / cerrar]
→ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ꨄ︎ *#kick* [número / mension]
→ Elimina un usuario de un grupo.
ꨄ︎ *#add • #añadir • #agregar* [número]
→ Invita a un usuario a tu grupo.
ꨄ︎ *#promote* [mension / etiquetar]
→ El bot dara administrador al usuario mencionando.
ꨄ︎ *#demote* [mension / etiquetar]
→ El bot quitara administrador al usuario mencionando.
ꨄ︎ *#gpbanner • #groupimg*
→ Cambiar la imagen del grupo.
ꨄ︎ *#gpname • #groupname*
→ Cambiar el nombre del grupo.
ꨄ︎ *#advertir • #warn • #warning*
→ Darle una advertencia aún usuario.
ꨄ ︎*#unwarn • #delwarn*
→ Quitar advertencias.
ꨄ︎ *#banchat*
→ Banear el Bot en un chat o grupo.
ꨄ︎ *#unbanchat*
→ Desbanear el Bot del chat o grupo.
ꨄ︎ *#mute* [mension / etiquetar]
→ El bot elimina los mensajes del usuario.
ꨄ︎ *#unmute* [mension / etiquetar]
→ El bot deja de eliminar los mensajes del usuario.
ꨄ︎ *#delete • #del*
→ Elimina mensaje de otros usuarios.
ꨄ︎ *#fantasmas*
→ Ver lista de inactivos del grupo.
ꨄ︎ *#kickfantasmas*
→ Elimina a los inactivos del grupo.
ꨄ︎ *#invocar • #tagall • #todos*
→ Invoca a todos los usuarios de un grupo.
ꨄ︎ *#setemoji • #setemo*
→ Cambia el emoji que se usa en la invitación de usuarios.
ꨄ︎ *#listnum • #kicknum*
→ Elimine a usuario por el prefijo de país.

»  ⊹˚• \`Anime\` •˚⊹

✎ Comandos de reacciones de anime.
ꨄ︎ *#angry • #enojado* + <mencion>
→ Estar enojado
ꨄ︎ *#dance* + <mencion>
→ Saca
ꨄ︎ *#impregnate • #preg* + <mencion>
→ Embarazar a alguien
ꨄ︎ *#kill* + <mencion>
→ Toma tu arma y mata a alguien
ꨄ︎ *#kiss • #besar* • #kiss2 + <mencion>
→ Dar un beso
ꨄ︎ *#lick* + <mencion>
→ Lamer a alguien
ꨄ︎ *#slap* + <mencion>
→ Dar una bofetada
ꨄ︎ *#smoke* + <mencion>

»  ⊹˚• \`NSFW\` •˚⊹

✎ Comandos NSFW (Contenido para adultos)
ꨄ︎ *#anal* + <mencion>
→ Hacer un anal
ꨄ︎ *#waifu
→ Buscá una waifu aleatorio.
ꨄ︎ *#bath* + <mencion>
→ Bañarse
ꨄ︎ *#cum* + <mencion>
→ Venirse en alguien.
ꨄ︎ *#fuck • #coger • #fuck2* + <mencion>
→ Follarte a alguien
ꨄ︎ *#violar • #perra + <mencion>
→ Viola a alguien
ꨄ︎ *#rule34 • #r34* + [Tags]
→ Buscar imagenes H
ꨄ︎ *#undress • #encuerar* + <mencion>
→ Desnudar a alguien.
  `.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];

export default handler;
