import React, { Component } from 'react';
import { Route } from 'react-router';
import {
	BrowserRouter as Router,
	Redirect,
	withRouter
} from 'react-router-dom';
import { Animated } from 'react-animated-css';
import Portfolio from '../Portfolio/Portfolio';
import './Homepage.css';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectPortfolio: false,
		};
	}

	onClick = () => {
		this.setState({
			redirectPortfolio: true
		});
	};

	render() {
		const { redirectPortfolio } = this.state;

		if (redirectPortfolio) {
			return <Redirect to="/portfolio" component={Portfolio} />;
		}

		return (
			<Router>
				<Animated animationIn="fadeIn" animationInDuration={1500}>
					<div className="container">
						<div className="homepage">
							<div className="banner">
								<Animated animationIn="slideInLeft" animationInDuration={1000}>
									<div className="banner-image">
										<div className="banner-image-info">
											<div className="banner-image-info-name">Lam Nguyen</div>
											<div className="banner-image-info-title">
												UI/UX Designer - Front-end Developer
											</div>
											<div className="banner-image-info-body">Ho Chi Minh City, Vietnam</div>
											<div className="banner-image-info-body">
												Don’s work includes a wide range of fields, reflecting
												his abilities in graphic design, web-based design, UI
												design, motion graphic design, typography and many other
												fields. Recently, He is interested in iOS, web
												developent to create the actual product.
											</div>
										</div>
									</div>
								</Animated>
							</div>

							<div className="nav">
								<ul>
										<li onClick={this.onClick}>Portfolio</li>
									<li>Resume</li>
									<li>
										<a href="https://www.behance.net/lamtronn" target="_blank">
											Behance
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/tronble" target="_blank">
											Facebook
										</a>
									</li>
									<li>
										<a href="mailto:lamtrn98@gmail.com">Email</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Animated>
			</Router>
		);
	}
}

export default withRouter(Homepage);
