import {$inputTodo} from '../components/todoInput.js';
import {$filters} from '../components/todoCount.js';

import {handleTodoFilter} from '../event/clickEvent.js';
import {addTodoItem} from '../event/keypressEvent.js';

$inputTodo.addEventListener('keypress', addTodoItem);
$filters.addEventListener('click', handleTodoFilter);