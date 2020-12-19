import {$todoList} from '../components/todoList.js';

export let $countItems = document.querySelector('.todo-count');
export const $filters = document.querySelector('.filters');

export function countTodoItems() {
    const count = $todoList.childElementCount - $todoList.getElementsByClassName('hidden').length;
    return count;
}