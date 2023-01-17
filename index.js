let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>                
        <div class = "item-btn" >
        <i class="fa-solid fa-x"></i>
        <div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('please enter a task');
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-x')) {
        e.target.parentElement.parentElement.remove();
    }
})

