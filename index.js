// Setup
require('dotenv').config()

const Telegraf = require('telegraf')
const fs = require('fs')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Functions
console.log("--> Bot Running! <--")

bot.start((ctx) => ctx.reply(`Olá, ${ctx.message.from.first_name}!`))

bot.command('bomdia', (ctx) => {
  const rand = Math.floor((Math.random() * 7) + 1)
  ctx.replyWithPhoto( 
    {source: fs.createReadStream(`./public/bomdia/${rand}.png`)} 
  )
})

bot.command('boanoite', (ctx) => {
  const rand = Math.floor((Math.random() * 10) + 1)
  ctx.replyWithPhoto( 
    {source: fs.createReadStream(`./public/boanoite/${rand}.jpg`)} 
  )
})

bot.launch()