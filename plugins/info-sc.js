import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/FahriAdison/Sad-Multi-Device*\nfollow tiktok gw Untuk Mengetahui Update Selanjutnya:https://www.tiktok.com/@leviatnansyah?_t=8UnaVTcn97p&_r=1\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
