import fs from 'fs';
import fetch from 'node-fetch'

// CODE FOR LEAGUES
/*
const writepath = 'public/images/leagues/'
fs.mkdirSync(writepath, {recursive: true})

try {
    // read leagues file into an array of lines
    const data = fs.readFileSync('public/files/leagues.txt', 'utf8').split("\n")
    data.pop() // remove last empty line
    data.forEach((elem, idx) => {
        const url = `https://playfootball.games/media/competitions/${elem}.png`
        fetch(url).then(res => {
                // check status
                if (res.status === 200) {
                    res.body.pipe(fs.createWriteStream(`${writepath}${elem}.png`))
                } else {
                    console.log(`status: ${res.status} line: ${idx} elem: ${elem} not found`)
                }
            }).catch(err => console.log(err))
    })
} catch (err) {
    console.error(err);
}
*/

// CODE FOR TEAMS
/*
const writepath = 'public/images/logos/'
fs.mkdirSync(writepath, {recursive: true})

try {
    const data = fs.readFileSync('public/files/teamId.txt', 'utf-8').split("\n")
    data.pop() // remove last empty line
    data.forEach( (elem, idx) => {
        elem = elem.replace(/\r$/, '')
        let module = elem % 32
        const url = `https://cdn.sportmonks.com/images/soccer/teams/${module}/${elem}.png`

        fetch(url).then(res => {
            if(res.status === 200){
                res.body.pipe(fs.createWriteStream(`${writepath}${elem}.png`))
            } else {
                console.log(`status: ${res.status} line: ${idx} elem: ${elem} not found`)
            }
        }).catch(err => console.log(err))
    })

} catch (err) {
    console.log(err)
}
*/

// CODE FOR PLAYERS
/*
const writepath = 'public/images/photos/'
fs.mkdirSync(writepath, {recursive: true})

const data = fs.readFileSync('public/files/playersId.txt', 'utf-8').split("\n")
data.pop() // remove last empty line

// divide data into chunks of 100 elements
let chunks = []
let chunkSize = 10
for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize))
}

// setTimeout is a one-time call
// setInterval is a recurring call

// use setInterval to call getData() every 1000ms with one of the chunks
let i = 0
setInterval(() => {
    getData(chunks[i])
    i++
}, 1000)

// getData() fetches the data from the API and saves the picture in the directory writepath
// the picture is named after the player's id
async function getData(chunk) {
    for(let i = 0; i < chunk.length; i++) {
        let id = chunk[i]
        id = id.replace(/\r$/, '')
        await fetch(`https://media.api-sports.io/football/players/${id}.png`)
            .then(res => {
                    if (res.status === 200) {
                        res.body.pipe(fs.createWriteStream(`${writepath}${id}.png`))
                    } else {
                        console.log(`status: ${res.status} id: ${id} not found`)
                    }
                }
            )
    }
}
*/

// CODE FOR NATIONS
/*
const writepath = 'public/images/nations/'
fs.mkdirSync(writepath, {recursive: true})

try {
    const data = fs.readFileSync('public/files/nationalities.txt', 'utf-8').split("\n")
    data.pop() // remove last empty line
    data.forEach( (elem, idx) => {
        // remove '/r' from end of line and replace spaces for '%20'
        elem = elem.replace(/\r$/, '')
        let tmp_name = elem.replace(/ /g, '%20')
        tmp_name = elem.toLowerCase()

        // create the url
        const url = `https://playfootball.games/who-are-ya/media/nations/${tmp_name}.svg`

        // fetch the svg
        fetch(url).then(res => {
            if(res.status === 200){
                res.body.pipe(fs.createWriteStream(`${writepath}${elem}.svg`))
            } else {
                console.log(`status: ${res.status} line: ${idx} elem: ${elem} not found`)
            }
        }).catch(err => console.log(err))
    })

} catch (err) {
    console.log(err)
}
*/