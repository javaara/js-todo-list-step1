export const $todoList = document.getElementById('todo-list');

export function renderTodoItemTemplate(title) {
    return ` <li>
            <div class="view">
                <input class="toggle" type="checkbox">
                <label class="label">${title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="새로운 타이틀">
        </li>`;
}

export function toggleTodoItem(e) {
    if(e.target.className == 'toggle'){
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('input').setAttribute('checked', true);
    }
}

export function removeTodoItem(e) {
    if(e.target.className == 'destroy'){
        e.target.closest('li').remove();
        $countItems.querySelector('strong').innerText = countTodoItems();
    }
}

export function editTodoItem(e) {
    if(e.target.className == 'label') {
        e.target.closest('li').classList.toggle('editing');
    }
}

export function updateTodoItem(e) {
    if(e.key === 'Enter') {
        e.target.closest('li').classList.remove('editing');
        e.target.closest('li').querySelector('label').innerText = e.target.value;
    } else if(e.key === 'Escape') {
        e.target.closest('li').classList.remove('editing');
    }
}