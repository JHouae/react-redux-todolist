import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
 
	// 点击事件
	addTodoHandle(){
		var node = this.refs.input;
		var text = node.value.trim();
		this.props.onAddClick(text);
		node.value = "";
	}
  render() {
    return (
      <div>
      	<input type="text" ref="input" placeholder="请输入内容"/>
      	<button onClick={this.addTodoHandle.bind(this)}>添加TODO</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func
}

