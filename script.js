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

const rootStyles = getComputedStyle(document.documentElement);

const softRed = rootStyles.getPropertyValue('--clr-soft-red');

const clrCyan = rootStyles.getPropertyValue('--clr-cyan');

let isChanged = false;

const dayOfTheWeek = document.getElementById('test');

dayOfTheWeek.addEventListener('click', () => {
    if(!isChanged) {
        dayOfTheWeek.style.backgroundColor = clrCyan;
    } else {
        dayOfTheWeek.style.backgroundColor = softRed;
    }
    isChanged = !isChanged;
});


