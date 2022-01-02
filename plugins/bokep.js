let handler = async (m, { conn, usedPrefix }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bokep)}”`, '©Lord Botz', 'Lagi?', `#bokep`, m)
}
handler.help = ['bokep']
handler.tags = ['dewasa']
handler.command = /^(bokep)$/i

handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
  "https://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file\nSangean:v",
  "https://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file\nSangean:v",
]
