import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	withRouter
} from 'react-router-dom';
import SideItem from '../SideItem/SideItem';
import './SideMenu.css';

var projects = [
	{
		projectName: 'Project 1',
		projectType: 'Web design'
	},
	{
		projectName: 'Project 2',
		projectType: 'Web design'
	},
	{
		projectName: 'Project 3',
		projectType: 'Web design'
	}
];
class SideMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activedItem: 0,
			isBackMenu : false,
		};
	}

	onClick = param => {
		this.setState({ activedItem: param });
	};

	render() {
		var {activedItem} = this.state;
		var element = projects.map((project, index) => {
			return (
				<div onClick={() => this.onClick(index)}>
					<SideItem
						isSelected = {activedItem === index ? 'project-selected' : null}
						projectID={index}
						projectName={project.projectName}
						projectType={project.projectType}
					/>
				</div>
			);
		});
		return <div className="menu">{element}</div>;
	}
}

export default withRouter(SideMenu);
