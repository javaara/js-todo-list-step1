import {$todoList} from '../components/todoList.js';
import {$countItems, countTodoItems} from '../components/todoCount.js'

export function handleTodoFilter(e) {
    console.log(e.target);
    if(e.target.classList.contains('completed')) {
        for(let i=0; i<$todoList.children.length; i++) {
            if($todoList.children[i].classList.contains('completed')) {
                $todoList.children[i].classList.remove('hidden');
            } else {
                $todoList.children[i].classList.add('hidden');
            }
        }
    } else if(e.target.classList.contains('active')) {
        for(let i=0; i<$todoList.children.length; i++) {
            if($todoList.children[i].classList.contains('completed')) {
                $todoList.children[i].classList.add('hidden');
            } else {
                $todoList.children[i].classList.remove('hidden');
            }
        } 
    } else {
        for(let i=0; i<$todoList.children.length; i++) {
          $todoList.children[i].classList.remove('hidden');
        }
    }
    $countItems.querySelector('strong').innerText = countTodoItems();
}

