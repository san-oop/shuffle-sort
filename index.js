const NUMBERS = [
    {
        value: 1,
        color: '#6F98A8'
    },
    {
        value: 2,
        color: '#2B8EAD'
    },
    {
        value: 3,
        color: '#2F454E'
    },
    {
        value: 4,
        color: '#2B8EAD'
    },
    {
        value: 5,
        color: '#2F454E'
    },
    {
        value: 6,
        color: '#BFBFBF'
    },
    {
        value: 7,
        color: '#BFBFBF'
    },
    {
        value: 8,
        color: '#6F98A8'
    },
    {
        value: 9,
        color: '#2F454E'
    },
]

const init = (numbersArray = NUMBERS) => {
    numbersArray.forEach(item => {
        const { value, color } = item;
        const div = document.createElement('div');
        div.innerText = value;
        div.style.backgroundColor = color;
        div.style.borderLeft = `8px solid ${color}`;
        document.getElementsByClassName('numbers-container')[0].appendChild(div);
    });
}

const shuffle = () => {
    const numbersArray = [...NUMBERS]
    for (let i = numbersArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = numbersArray[i];
        numbersArray[i] = numbersArray[j];
        numbersArray[j] = temp;
    }
    const numbersContainer = document.getElementsByClassName('numbers-container')[0];
    numbersContainer.innerHTML = '';
    init(numbersArray);
}

const sort = () => {
    const numbersContainer = document.getElementsByClassName('numbers-container')[0];
    numbersContainer.innerHTML = '';
    init();
}