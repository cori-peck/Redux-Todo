export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = todoItem => {
    console.log(todoItem);
    return {
        type: ADD_TODO,
        payload: todoItem
    }
}

export const toggleComplete = id => {
    console.log(id);
    return {
        type: TOGGLE_COMPLETE,
        id: id
    }
}