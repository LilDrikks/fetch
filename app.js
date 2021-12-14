let body = document.getElementById('#body')
let contain = document.getElementById('container')
let linkGame = document.getElementById('linkGame')
let imgGame = document.getElementById('imgGame')
let nameH1 = document.getElementById('nameH1')
let description = document.getElementById('description')
let PREVIUS = document.getElementById('PREVIUS')
let NEXT = document.getElementById('NEXT')
let promise1
let promise2
let promise3
let promiseFinal

function fetch1() {
    const allpromises = []
    for (let i = 1; i < 30; i++) {
        allpromises.push(fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${i}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
                }
            })
            .then(response => response.json()))
        Promise.all(allpromises).then(games => {
            promise1 = games
        })
    }
}
fetch1()

function fetch2() {
    const allpromises2 = []
    for (let i = 30; i < 60; i++) {
        allpromises2.push(fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${i}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
                }
            })
            .then(response => response.json()).then(
                Promise.all(allpromises2).then(games => {
                    promise2 = games
                })
            ))
    }
}
fetch2()

function fetch3() {
    const allpromises2 = []
    for (let i = 60; i < 90; i++) {
        allpromises2.push(fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${i}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
                }
            })
            .then(response => response.json()).then(
                Promise.all(allpromises2).then(games => {
                    promise3 = games
                })
            ))
    }
}
fetch3()
setTimeout(() => {
    render1()
}, 1100);

function render1() {
    promiseFinal = [...promise1, ...promise2, ...promise3]
    nameH1.innerText = promiseFinal[0].title
    linkGame.innerText = 'Download: ' + promiseFinal[0].title
    linkGame.href = promiseFinal[0].game_url
    description.innerText = promiseFinal[0].description
    imgGame.src = promiseFinal[0].thumbnail
}
let conta = 0
NEXT.addEventListener('click', async function buscarGame() {
    if (conta < promiseFinal.length - 1) {
        conta++
        for (let i = 0; i == promiseFinal[conta].status; i = 0) {
            await promiseFinal.splice(conta, 1)
        }
        nameH1.innerText = promiseFinal[conta].title
        linkGame.innerText = 'Download: ' + promiseFinal[conta].title
        linkGame.href = promiseFinal[conta].game_url
        description.innerText = promiseFinal[conta].description
        imgGame.src = promiseFinal[conta].thumbnail
    }
})
PREVIUS.addEventListener('click', function buscarGame() {
    if (conta >= 1) {
        conta--
        nameH1.innerText = promiseFinal[conta].title
        linkGame.innerText = 'Download: ' + promiseFinal[conta].title
        linkGame.href = promiseFinal[conta].game_url
        description.innerText = promiseFinal[conta].description
        imgGame.src = promiseFinal[conta].thumbnail
    }
})