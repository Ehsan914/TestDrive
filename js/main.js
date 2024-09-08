// const p = document.getElementById('text');
// let text = `<a href='#'><p>Testing...`;

// for (let i = 0; i < 10; i++) {
//     text += `.`;
// }

// text += `</p></a>`;

// p.innerHTML = Date();

// setTimeout(function() {
//     p.style.fontSize = `50px`;
//     console.log(p.style.fontSize);
// }, 2000)

// function myMove() {
//     const animate = document.getElementById('animate');
//     let pos = 0;

//     const move = setInterval(() => {
//         animate.style.top = pos + 'px';
//         animate.style.left = pos + 'px';
//         if (pos > 548) {
//             clearInterval(move);
//         }
//         pos += 2;
//     }, 5);
// }

const display = document.getElementById('text');

function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Your device is not compitable for this feature!");
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude +
                        "<br/>Longitude: " + position.coords.longitude;
}