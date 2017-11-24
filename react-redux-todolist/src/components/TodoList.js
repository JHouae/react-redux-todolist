import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem.js';

export default class TodoList extends React.Component {

  render() {
    console.log(this.props.todos);
    return (
      <div>
      	<ul>
      	{this.props.todos.map((todo, index) => 
      		<TodoListItem 
						key={index}
						{...todo}
						todoClick={()=>this.props.onTodoClick(index)}
      		/>)}
      		
      	</ul>
      </div>
    );
  }
}

TodoList.propTypes = {
	onTodoClick: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }))
}
