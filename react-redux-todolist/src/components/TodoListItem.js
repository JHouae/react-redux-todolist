import React from 'react';
import PropTypes from 'prop-types';

export default class TodoListItem extends React.Component {

  render() {
    return (
      <li 
      	onClick={this.props.todoClick}
      	style={{
      		textDecoration: this.props.completed ? "line-through" : "none",
      		cursor: this.props.completed ? "default" : "pointer"
      	}}
      	>
      	{this.props.text}
      </li>
    );
  }
}

TodoListItem.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  todoClick: PropTypes.func
}
