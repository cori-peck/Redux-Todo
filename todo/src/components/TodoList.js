import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    state= {
        newTodo: ''
    }

    render() {
        return (
            <>
                <header>
                    <h1>Things I Gotz To Do:</h1>
                </header>
                <div>
                    {this.props.todoList.map(todo => (
                        <h4 key={todo.value}>
                            {todo.value}
                        </h4>
                    ))}
                </div>
                <input type="text" placeholder="Add new todo" />
                <button>Add Todo</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todos
})

export default connect(mapStateToProps)(TodoList)