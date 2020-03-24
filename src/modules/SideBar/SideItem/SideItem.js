import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	withRouter
} from 'react-router-dom';
import classnames from 'classnames';
import './SideItem.css';

class SideItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false
		};
	}
	render() {
		return (
			<div className={classnames('project', this.props.isSelected)}>
				<div className="project-name">{this.props.projectName}</div>
				<div className="project-type">{this.props.projectType}</div>
			</div>
		);
	}
}

export default withRouter(SideItem);
