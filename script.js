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

const days = document.querySelectorAll('.dayOfTheWeek');

days.forEach(day => {
    day.addEventListener('click', () => {
        if(!isChanged) {
            day.style.backgroundColor = clrCyan;
            day.style.transition = "all 500ms";
            day.style.transform = "scale(1.1)";
        } else {
            day.style.backgroundColor = softRed;
            day.style.transform = "scale(1)";
        }
        isChanged = !isChanged;
    });
});


