// fetching the json file
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        console.log(obj);
    })
    .catch(function (error) {
        console.error(`Something went wrong : ${error}`);
    });

// Chart

const clrCyan = getComputedStyle(document.documentElement).getPropertyValue('--clr-cyan');
console.log(clrCyan);


const dayOfTheWeek = document.getElementById('test');

dayOfTheWeek.addEventListener('click', () => {
    dayOfTheWeek.style.backgroundColor = clrCyan;
});


