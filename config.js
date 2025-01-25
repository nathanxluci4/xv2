import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['918618971837', '†  𝖓𝖆𝖙𝖍𝖆𝖓   ⛧', true], 
  ['6283891139988', 'МАЙКИ', true],
  ['918438374975', '†  𝖓𝖆𝖙𝖍𝖆𝖓   ⛧', true], 
  ['27633365774', '†  𝖓𝖆𝖙𝖍𝖆𝖓   ⛧', true],
] 

global.mods = ['918618971837', '6283891139988', '918438374975', '233268374753', '27633365774'] 
global.prems = ['918618971837', '6283891139988', '918438374975', '918360234087', '27633365774']
global.allowed = ['918618971837', '233208179431', '918438374975', '918360234087', '27633365774']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '⸸𝚂𝙰𝙳𝙸𝚃𝙷†'
global.premium = 'true'
global.packname = '𝑵𝑨𝑻𝑯𝑨𝑵' 
global.author = '𝑺𝑨𝑫𝑰𝑻𝑯' 
global.menuvid = 'https://telegra.ph/file/325630f66abc968eda8e2.mp4'
global.igfg = '▢✓ Follow Our channel\nhttps://whatsapp.com/channel/0029VagLBl4DeOMyzdqe690U\n' 
global.dygp = 'https://chat.whatsapp.com/JxbGaFq93SC0abecUS0iqh'
global.fgsc = 'https://github.com/luxxy4' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _SADE IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
