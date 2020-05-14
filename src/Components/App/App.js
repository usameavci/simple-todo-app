import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import Logo from '../Shared/Logo/Logo';
import rootReducer from '../../reducers';
import TodoList from '../TodoList/TodoList';
import Copyrights from '../Shared/Copyrights/Copyrights';

import './app.scss';

const App = () => {
    const enhancer = compose(persistState());
    const store = createStore(rootReducer, enhancer);

    return (
        <Provider store={store}>
            <div className="app">
                <Logo/>
                <TodoList/>
                <Copyrights/>
            </div>
        </Provider>
    );
};

export default App;
