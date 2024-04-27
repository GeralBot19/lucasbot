let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `👑🔱➢ 𝐁𝐨𝐭 𝐝𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐦𝐮𝐞𝐫𝐭𝐨𝐬 𝐥𝐥𝐞𝐠𝐨 𝐥𝐮𝐜𝐚𝐬 𝐞𝐥 𝐫𝐞𝐲:  ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 
👑🔱👑🔱 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐚𝐝𝐨𝐫𝐧𝐨𝐬 𝐦𝐮𝐞𝐫𝐭𝐨𝐬 🔱👑 \n\n ${oi}\n\n 👹🔥➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👹🔥≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐋𝐮𝐜𝐚𝐬 𝐭𝐮 𝐫𝐞𝐲 👑🔱 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
