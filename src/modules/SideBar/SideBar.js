import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {
	BrowserRouter as Router,
	withRouter
} from 'react-router-dom';
import SideHeader from './SideHeader/SideHeader';
// import SideMenu from './SideMenu/SideMenu';
import SideItem from './SideItem/SideItem';
import './SideBar.css';

let projects = [
	{
		projectName: 'Mira Doctor Booking',
		projectType: 'Reponsive web design'
	},
	{
		projectName: 'Distrio',
		projectType: 'Landing page design'
	},
	{
		projectName: 'Project 3',
		projectType: 'Web design'
	}
];
class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectDashboard: false,
			activedItem: 0,
			isBackMenu : false,
		};
	}

	onClick = param => {
		this.setState({ activedItem: param });
		this.props.onClickProject(param);
	};

	onLoginClick = () => {
		this.setState({
			redirectDashboard: true
		});
	};

	isBack = (param) => {
		this.props.redirectHomepage(param);
	}
	
	render() {
		let {activedItem} = this.state;
		let element = projects.map((project, index) => {
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
		return (
			<div>
				<SideHeader onClickBack={this.isBack}></SideHeader>
				{/* <SideMenu></SideMenu> */}
				<div className="menu">{element}</div>
			</div>
		);
	}
}

export default withRouter(SideBar);
