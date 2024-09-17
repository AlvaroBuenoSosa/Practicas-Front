document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetchButton');
    const result = document.getElementById('result');


    const url = 'http://195.201.93.28:20081/jsonserver';

    button.addEventListener('click', () => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {

                result.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {

                result.textContent = 'Error fetching data: ' + error.message;
            });
    });
});

