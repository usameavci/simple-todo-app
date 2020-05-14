import React from 'react';

import { VisibilityFilters } from '../../actions';
import TodoFilterItem from '../TodoFilterItem/TodoFilterItem';

import './todo-filter.scss';

const TodoFilter = () => {
    return (
        <div className="todo-filter">
            <TodoFilterItem filter={VisibilityFilters.SHOW_ALL}>All</TodoFilterItem>
            <TodoFilterItem filter={VisibilityFilters.SHOW_ACTIVE}>Active</TodoFilterItem>
            <TodoFilterItem filter={VisibilityFilters.SHOW_COMPLETED}>Completed</TodoFilterItem>
        </div>
    );
};

export default TodoFilter;
