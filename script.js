const app = document.getElementById('root');

let cityName,
    countryCode;

const key = '0859cc855f463308434e640ef36c8314'
let api = `api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=${key}`


const container = document.createElement('div')
container.setAttribute('class', 'container')


app.appendChild(container);

const request = new XMLHttpRequest();
request.open('GET', `https://${api}`, true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(request.response);
    // let data = JSON.parse(this.response);
    console.log(request.status);
    console.log(request.responseText);
console.log(data);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(data => {
            // create card
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            // create title
            const h1 = document.createElement('h1');
            h1.textContent = data.weather;

            const p = document.createElement('p');
            p.textContent = data.main;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();



