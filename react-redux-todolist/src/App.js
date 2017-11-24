import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, comleteTodo, setVisibilityFilter, VisibilityFilters } from './actions/TodoListActions.js';
import './App.css';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    // App 接收 state 映射后的对象obj中的属性和 dispatch 传递给子组件
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
    return (
      <div className="App">
        <AddTodo 
          onAddClick={(text) => dispatch(addTodo(text))}
        />
        <TodoList 
          todos={visibleTodos}
          onTodoClick={(index) => dispatch(comleteTodo(index))}
        />
        <Footer 
          fliter={visibilityFilter}
          onFilterChange={(nextFilter) => dispatch(setVisibilityFilter(nextFilter))}
        />
      </div>
    );
  }
}
App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  })),

  visibilityFilter: PropTypes.oneOf([
    "SHOW_ALL",
    "SHOW_COMPLETE",
    "SHOW_NOT_COMPLETE"
  ])
}

const selectTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL: 
      return todos;
    case VisibilityFilters.SHOW_COMPLETE:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_NOT_COMPLETE:
      return todos.filter(todo => !todo.completed)
  }
}

/*
  mapStateToProps  映射state
  state 【store】里的state
  object  【返回一个对象，吧对象里面的参数已属性传给APP 以及附带一个dispatch
*/
const select =(state)=> {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
