import plankton from '@lixinyang123/plankton'
import fs from 'fs'

let app = plankton()

// map static file
app.useStaticFile()

app.map('/', (req, res) => {
    if (req.cookie.submited) {
        res.redirect('/end.html')
    }
    else {
        res.redirect('/submit.html')
    }
})

app.map('/wjyssb', (req, res) => {
    res.redirect('/wjyssb.html')
})

app.map("/submit", async (req, res) => {
    if (req.cookie.submited) {
        res.redirect('/end.html')
    }

    let body = await req.body()
    let data = JSON.parse(fs.readFileSync('./src/wwwroot/data/data.json', 'utf-8'))
    data.push(body)
    fs.writeFileSync('./src/wwwroot/data/data.json', JSON.stringify(data))
    res.cookie('submited', 'true')
    res.redirect('/end.html')
})

app.map('/getAllUser', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/wwwroot/data/data.json', 'utf-8'))
    res.json(data)
})

app.build().start()
