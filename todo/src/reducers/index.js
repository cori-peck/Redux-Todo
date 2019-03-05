import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        { value: 'Make Dinner', completed: false },
        { value: 'Clean Kitchen', completed: false }
    ]
};

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        default:
            return state;
    }
}

export default reducer