const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "Sniper v4"
global.ownerName = "King Phantom"
global.botNumber = "234XXXX"
global.devNumber = ["234XXXX"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

global.domain = "https://" // Ganti Domain Lu
global.key_plta = "--" // Isi Apikey Plta Lu
global.key_pltc = "--" // Isi Apikey Pltc Lu
global.nama_host = "kontol" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})