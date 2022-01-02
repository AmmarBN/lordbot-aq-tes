let handler = async m => m.reply(`
Lord Botz Menggunakan Script
https://github.com/AmmarBN/lordbot-aq-tes
Jangan Lupa Kasi Star ya kak
`.trim()) // Tambah sendiri kalo mau
handler.help = ['script']
handler.tags = ['info']
handler.command = /^scri(pt|sc)$/i

module.exports = handler
