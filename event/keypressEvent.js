import {$todoList, 
    renderTodoItemTemplate, 
    toggleTodoItem, 
    removeTodoItem, 
    editTodoItem, 
    updateTodoItem} from '../components/todoList.js';
import {$countItems, countTodoItems} from '../components/todoCount.js'

export function addTodoItem(e) {
    const title = e.target.value;
    if(e.key === 'Enter' && title !== "") {
        $todoList.insertAdjacentHTML('beforeend', renderTodoItemTemplate(title));
        e.target.value = "";
        $todoList.addEventListener('click', toggleTodoItem);
        $todoList.addEventListener('click', removeTodoItem);
        $todoList.addEventListener('dblclick', editTodoItem);
        $todoList.addEventListener('keyup', updateTodoItem);
        $countItems.querySelector('strong').innerText = countTodoItems();
    }
}

