const fs = require('fs')


// APIKEY's
global.APIs = {
      	zeks: 'https://zeks.me',
      	anto: 'https://hardianto.xyz',
        amel : 'https://melcanz.com',
}


// Apikey Website Api
global.APIKeys = {
      	'https://zeks.me': 'BETA',  //REGISTRASI FOR KEY
        'https://hardianto.xyz': 'hardianto',
        'https://melcanz.com' : 'BETA',  //REGISTRASI FOR KEY
}


// Nomor Owner
global.ownerNumber = ["94753943957@s.whatsapp.net","94753943957@s.whatsapp.net"]
global.owner = ["94753943957","94753943957"]


// Nama Bot
global.botName = 'BOTKINGDOM - Bot'


// EXIF
global.packname = 'BOTKINGDOM Bot'
global.author = '❤️'


// OTHERS
global.Prefix = 'Multi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sessionName = 'Dash'
global.Mode = 'Public'
global.mess = {
    admin: 'ඇඩ්මින් සදහා පමනි',
    botAdmin: 'බොට් ඇඩ්මින්වරයකු නොවෙ!',
    owner: 'බොසාට විතරයි',
    group: 'ගෲප් චැට් ඔන්ලි!',
    private: 'ඉන්බොක්ස් ඔන්ලි!',
    query: 'Command harus disertai Query..',
    link: 'ලින්ක් ප්ලීස්',
    wait: 'Loading...',
    done: 'සාර්ථකයි.',
    wrongFormat: 'වැරදි විධානයකි.',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
    rules : `Isi Sendiri!!`
}


// Path Img/Media
global.pathImg = fs.readFileSync('./media/Dash.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')
