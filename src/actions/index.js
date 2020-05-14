import generateUniqueId from "../Helpers/generate-unique-id";

export const addTodo = title => ({
    type: 'ADD_TODO',
    id: generateUniqueId(),
    title,
    done: false,
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleDone = id => ({
    type: 'TOGGLE_DONE',
    id,
});

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id,
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};
