import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/TodoListActions.js';
const { SHOW_ALL } = VisibilityFilters;

// 过滤器 响应
const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

// 代办项 响应 （添加 完成 
const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO: 
			return [
				...state,
				{
					text: action.text,
					complete: false
				}
			];
		case COMPLETE_TODO:
			return [
				// slice 返回数组指定元素
				...state.slice(0, action.index),
				// assign 合并
				Object.assign({}, state[action.index], {
					completed: true
				}),
				...state.slice(action.index + 1)
			];
			default:
				return state;
	}
}

// 不同响应合并成一个reducer
const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp;