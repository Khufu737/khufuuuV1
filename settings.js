//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./KhufuMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variantsspreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
عالمي . vcardowner   = [ '0201030982295' ] // رقم مالكك
عالمي . ownername    =    "Mostef"    // اسم المالك الخاص بك
عالمي . ytname     =     T : u "// اسم قناة ur yt
global.socialm = "o" //ur github or insta name
global.location = "Egypt" //ur location

//bot bomdy 
عالمي . المالك  = [ '0201030982295' ]
عالمي . ownertag  =  '0201030982295'  // رقم العلامة الخاصة بك

global.botname = 'ᴹᴿ᭄ Bot Whatsapp ×፝֟͜×' //ur bot name
global.linkz = "
global.themeemoji = "🦄" //ur theme emoji
عالمي . packname  =  "0201030982295"  // اسم حزمة العلامة المائية الخاصة بملصقك
عالمي . المؤلف           =           "☺️"          # القاءد          # مصطفي          // مؤلف العلامة المائية للملصق الخاص بك  

//Bot theme mediathumb pic

//damtabase
عالمي .premium  = [ '0201030982295' ] // أرقامك المميزة
عالمي . ntilinkytvid  = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ضن✓',
    admin: 'لازم تكون ادمن الاول ',
    botAdmin: 'لازم اكون ادمن  الاول ',
    owner: 'ميزه دي ل مالك البوت فقط ',
    group: 'فقط في رومات ',
    private: 'برايفت بس!',
    bot: 'ميزه دي ل بوت فقط',
    wait: 'استني ....',
    linkm: 'فين لينك؟',
    error: 'ايرور!!!!',
    endLimit: 'تعالا بكره !',
    ban: 'لا استطيع ارسال اي شئ لان مالك قام بحظر هاذا روم !',
    nsfw: 'ميزه مقفوله خلي الادمن يشغلها!',
    banChat: ''
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./KhufuMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
