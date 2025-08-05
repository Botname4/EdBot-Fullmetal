import { exec } from 'child_process';

let handler = async (m, { conn }) => {
  // m.reply('${emoji4}🌪️ 𝒑𝒓𝒐𝒄𝒆𝒔𝒂𝒏𝒅𝒐 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒖𝒅 𝒅𝒆 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏...');

  exec('git pull', (err, stdout, stderr) => {
    if (err) {
      conn.reply(m.chat, `⚠️ Error: No se pudo realizar la actualización.\nRazón: ${err.message}`, m);
      return;
    }

    if (stderr) {
      console.warn('Advertencia durante la actualización:', stderr);
    }

    if (stdout.includes('Already up to date.')) {
      conn.reply(m.chat, '${emoji}🔥 𝒆𝒍 𝒃𝒐𝒕 𝒚𝒂 𝒆𝒔𝒕𝒂 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒅𝒐.', m);
    } else {
      conn.reply(m.chat, `👑 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒅𝒂 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐.\n\n${stdout}`, m);
    }
  });
};
@@ -25,5 +25,3 @@ handler.help = ['update'];
handler.tags = ['owner'];
handler.command = ['update'];
handler.rowner = true;
