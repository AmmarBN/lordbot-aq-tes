let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087708773367]
│ • Telkomsel [082136981440]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Nurutomo
│ • https://saweria.co/ariffb
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi','donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
