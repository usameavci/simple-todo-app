import { connect } from 'react-redux';
import React, { createRef, useState } from 'react';

import { addTodo } from '../../actions';
import Input from '../Shared/Input/Input';
import Button from '../Shared/Button/Button';

import './todo-create-form.scss';

const TodoCreateForm = ({ dispatch }) => {
    const input = createRef();

    const [title, setTitle] = useState('');

    const submitHandler = e => {

        if (title) {
            dispatch(addTodo(title));

            setTitle('');
        }

        return e.preventDefault();
    };

    return (
        <form className="todo-create-form" onSubmit={e => submitHandler(e)}>
            <Input ref={input} value={title} onChange={e => setTitle(e.target.value)}/>
            <Button className="todo-create-form-button" type="submit">Add Todo</Button>
        </form>
    )
};

export default connect()(TodoCreateForm);
