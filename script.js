function init() {
    const btn = document.querySelector('.btn');
    
    btn.addEventListener('click', addTask);
}

function addTask() {
    const input = document.getElementById('input');
    const elem = document.querySelector('#incomplete-task ul');

    const inputElem = document.createElement('input');
    const label = document.createElement('label');
    const li = document.createElement('li');
    
    inputElem.type = 'checkbox';

    elem.appendChild(li);
    li.appendChild(label);
    
    if (input.value === '' || input.value == undefined || input.value == null) {
        alert('Give a valid value');
    } else {
        li.appendChild(inputElem);
        label.innerText = input.value;
    }

    input.value = '';
    
    inputElem.addEventListener('change', () => {
        const task = document.querySelector('#completed-task ul');
        elem.removeChild(li);
        li.removeChild(inputElem);


        task.appendChild(li);
    })
}

init();