import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
    todos: [
        { value: 'Make Dinner', completed: false, id: 12345 },
        { value: 'Clean Kitchen', completed: false, id: 456789 }
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
        case TOGGLE_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                    )
            })
        
        default:
            return state;
    }
}

export default reducer