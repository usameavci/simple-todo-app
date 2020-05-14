import React from 'react';
import { connect } from 'react-redux';

import Button from '../Shared/Button/Button';
import { setVisibilityFilter } from '../../actions';

import './todo-filter-item.scss';

const mapStateToProps = (state, ownProps) => ({
    disabled: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

const TodoFilterItem = props => (<Button className="todo-filter-item" {...props}>{props.children}</Button>);

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterItem);
