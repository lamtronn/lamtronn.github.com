import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	withRouter
} from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SideBar from '../../modules/SideBar/SideBar';

import './Portfolio.css';
import Homepage from '../Homepage/Homepage';

//Import projects
import Project_1 from '../../projects/Project_1/Project_1';
import DoctorBooking from '../../projects/DoctorBooking/DoctorBooking';
import Distrio from '../../projects/Distrio/Distrio';

const mql = window.matchMedia(`(min-width: 800px)`);

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectId: 0,
			sidebarDocked: mql.matches,
			sidebarOpen: true,
			isRedirectHomepage: false
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}

	mediaQueryChanged() {
		this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
	}

	redirectHomepage = () => {
		this.setState({
			isRedirectHomepage: true
		});
	};

	handleProjectId = param => {
		this.setState({
			projectId: param
		});
	};

	selectProject() {
		if (this.state.projectId === 0) {
			return <DoctorBooking/>;
		}
		if (this.state.projectId === 1) {
			return <Distrio/>;
		}
		if (this.state.projectId === 2) {
			return <div>2</div>;
		}
	}

	render() {
		let currentProject = this.selectProject();
		if (this.state.isRedirectHomepage) {
			return <Redirect to="/port" Component={Homepage} />;
		}
		return (
			<Router>
				<div className="portfolio">
					<div className="side">
						<div className="side-header">asd</div>
						<div className="side-menu">
							<Sidebar
								sidebar={
									<SideBar
										onClickProject={this.handleProjectId}
										redirectHomepage={this.redirectHomepage}
									></SideBar>
								}
								open={this.state.sidebarOpen}
								onSetOpen={this.onSetSidebarOpen}
								docked={this.state.sidebarDocked}
								shadow={false}
								styles={{ sidebar: { background: 'white' } }}
							>
								<div className="content">{currentProject}</div>
							</Sidebar>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default withRouter(Portfolio);
