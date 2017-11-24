import React from 'react';
import PropTypes from 'prop-types';
import {VisibilityFilters} from '../actions/TodoListActions.js'
export default class Footer extends React.Component {
	
	renderFilter(filter, name){
					console.log(filter, name);

		if (filter === this.props.filter) {
			return name;
		}

		return <a href="#" onClick={e => {
			this.props.onFilterChange(filter);
			e.preventDefault();
		}}>
			{name}
		</a>
	}

  render() {
    return (
      <div>
      	展示：
      	{" "}
      	{this.renderFilter(VisibilityFilters.SHOW_ALL, '全部')}
      	{" | "}
      	{this.renderFilter(VisibilityFilters.SHOW_COMPLETE, '已完成')}
      	{" | "}
      	{this.renderFilter(VisibilityFilters.SHOW_NOT_COMPLETE, '未完成')}
      </div>
    );
  }
}

Footer.propTypes = {
  filter: PropTypes.oneOf([
		"SHOW_ALL",
    "SHOW_COMPLETE",
    "SHOW_NOT_COMPLETE"
  ]),
  onFilterChange: PropTypes.func
}
