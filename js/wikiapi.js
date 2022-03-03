// var xhr = new XMLHttpRequest ();
// var url ="https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// xhr.open('GET', url, true);


const submitbutton = document.querySelector('#submit')
const input = document.querySelector('#input')
const resultContainer = document.querySelector('#result')

const endpoint = 'https://en.wikipedia.org/w/api.php?'
const params = {
    origin: '*',
    format: 'json', 
    action: 'query',
    prop: 'extract',
    exchars: 250,
    exintro: true,
    explaintext: true,
    generator: 'search', 
    gsrlimit: 20,
};


const disableUi = ()=> {
    input.disabled = true
    submitbutton.disabled = true
};

const enableUi = () => {
    input.disabled = false
    submitbutton.disabled =false
};

// const changeUiState = (isDisabled) => {
//     input.disabled = isDisabled
//     submitbutton.disabled = isDisabled
// }

cons clearPreviousResults = () => {
    resultContainer.innerHTMLl =""
};

const ifInputEmpty = (input) => {
    if (!input || input === '') return true
    return false 
};


const getData = () => {

};

const handleKeyEvent = (e) => {
    if (e.key === 'Enter') {
        getData()
    }
};

const registerEventHandlers = () => {
    input.addEventListener('keydown', handleKeyEvent)
    submitbutton.addEventListener('click', )
};

registerEventHandlers();