import omit from 'lodash/omit';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{ ...omit(action, ['type']) }, ...state];

        case 'TOGGLE_DONE':
            return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);

        default:
            return state
    }
};
