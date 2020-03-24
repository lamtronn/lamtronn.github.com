import React, { Component } from 'react';
import { Route } from 'react-router';
import Button from '@material-ui/core/Button';
import {
	BrowserRouter as Router,
	withRouter
} from 'react-router-dom';
import './SideHeader.css';

class SideHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBack : false,
		};
	}

	onBack = () => {
		this.props.onClickBack(true);
	};
	
	render() {
		return (
			<div className="header">
				<div className="header-back" onClick={this.onBack}>Back</div>
				<div className="header-name">Lam Nguyen</div>
				<div className="header-title">UI/UX Designer</div>
			</div>
		);
	}
}

export default withRouter(SideHeader);
