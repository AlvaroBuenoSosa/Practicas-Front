import axios from 'axios';

const button = document.getElementById('fetchButton') as HTMLButtonElement;
const form = document.getElementById('dataForm') as HTMLFormElement;
const result = document.getElementById('result') as HTMLPreElement;


const url = 'http://195.201.93.28:20081/jsonserver';

button.addEventListener('click', async () => {
    try {

        const response = await axios.get(url);

        result.textContent = JSON.stringify(response.data, null, 2);
    } catch (error) {

        result.textContent = 'Error fetching data: ' + error;
    }
});