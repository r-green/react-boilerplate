import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers'
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const mapStateToProps = (state, { params } ) => ({
    todos: getVisibleTodos(state, params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;