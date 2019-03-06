import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete } from '../actions';

class TodoList extends React.Component {
    state= {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({ newTodo: e.target.value })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    }

    toggleComplete = id => {
        this.props.toggleComplete(id);
    }

    render() {
        return (
            <>
                <header>
                    <h1>Things I Gotz To Do:</h1>
                </header>
                <div>
                    {this.props.todoList.map(todo => (
                        <h4 className="todo-done" key={todo.id} onClick={() => this.toggleComplete(todo.id)}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.value}
                        </h4>
                    ))}
                </div>
                <input type="text" name="newTodo" value={this.state.newTodo} 
                    onChange={this.handleChange} placeholder="Add new todo" />
                <button onClick={this.addTodo}>Add Todo</button>
            </>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todos
})

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList)