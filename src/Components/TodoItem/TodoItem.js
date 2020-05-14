import React from 'react';
import classNames from 'classnames';
import Button from '../Shared/Button/Button';

import './todo-item.scss';

export default ({ id, title, done, toggleDone, removeTodo }) => {
    return (
        <div className={classNames("todo-item", {
            "todo-item--done": done,
        })}>
            <div className="todo-item-toggle" onClick={() => toggleDone(id)}/>
            <div className="todo-item-title">{title}</div>
            <Button className="todo-item-remove" onClick={() => removeTodo(id)}>Delete</Button>
        </div>
    );
};
