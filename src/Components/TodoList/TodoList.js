import React from 'react';
import { connect } from 'react-redux';

import TodoItem from '../TodoItem/TodoItem';
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoListEmpty from '../TodoListEmpty/TodoListEmpty';
import TodoCreateForm from '../TodoCreateForm/TodoCreateForm';
import { toggleDone, removeTodo, VisibilityFilters } from '../../actions';

import './todo-list.scss';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.done);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.done);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
    toggleDone: id => dispatch(toggleDone(id)),
    removeTodo: id => dispatch(removeTodo(id)),
});

const TodoList = ({ todos, toggleDone, removeTodo }) => {
    const itemRenderer = todo => <TodoItem {...todo} key={todo.id} toggleDone={toggleDone} removeTodo={removeTodo} />;

    return (
        <div className="todo-list">
            <TodoCreateForm/>
            <TodoFilter/>
            <div className="todo-list-viewport">
                {todos.length ? todos.map(itemRenderer) : <TodoListEmpty/>}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
