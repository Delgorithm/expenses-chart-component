// fetching the json file
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        console.log(obj);
    })
    .then(amountDisplay => {
        const amountExpenses = amountDisplay.amount[0];
    })
    .catch(function (error) {
        console.error('Something went wrong');
        console.log(`Error ${error}`);
    });

// Displaying "amount" in the form of a chart

