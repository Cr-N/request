// AJAX - Asyncrounou JavaScript And XML

const url = "https://api.chess.com/pub/puzzle/random";
// const Http = new XMLHttpRequest();  /// Metoda clasica
// Http.open("GET",url);
// Http.send();

// Http.onreadystatechange = (e) => {
//     console.log(Http.responseText);
// }

/// Metoda noua :::::: fetch
// function getJoke() {
//     fetch(url)
//     .then(data => data.json())
//     .then(response => {
//             const pic = document.createElement("img");
//             pic.src = response.data.memes[i].url;
//             pic.width= "500"
    
//             const text = document.createElement("p");
//             text.textContent= response.data.memes[i].name;
//             document.body.append(pic)
//             document.body.append(text)
//         }
//         // const text = document.createElement("p");
//         // text.textContent=response.joke;
//         // document.body.append(text);
//         // console.log(response.data.memes[0].url)
//     )
// }
// setInterval(getJoke, 5000);

function getJoke() {
    fetch(url)
    .then(data => data.json())
    .then(response => {
        const pic = document.createElement("img");
        pic.src= response.image;
        pic.width = "500";
        const text =document.createElement("a");
        // text.textContent = response.fen;
        text.href = "https://lichess.org/editor/" + response.fen;
        text.target = "blank";

        // document.body.append(pic)
        document.body.append(text)
        text.append(pic)

    })
}
setInterval(getJoke , 20000)