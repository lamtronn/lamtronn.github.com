import React, { Component } from 'react';
import { Route } from 'react-router';
import {
	BrowserRouter as Router,
	Redirect,
	withRouter,
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
			redirectPortfolio: true,
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
											<div className="banner-image-info-body">
												Ho Chi Minh City, Vietnam
											</div>
											<div className="banner-image-info-body">
												All the projects reflect my abilities in a wide range of
												fields, which includes UI designs, UX researching,
												programming with HTML/CSS/JS
											</div>
										</div>
									</div>
								</Animated>
							</div>

							<div className="nav">
								<ul>
									<Animated
										animationIn="slideInRight"
										animationInDuration={1000}
									>
										<li onClick={this.onClick}>Portfolio</li>
									</Animated>
									<Animated
										animationIn="slideInRight"
										animationInDuration={800}
									>
										<li>
											<a
												href="https://drive.google.com/file/d/1p7Yv4sMfjuw2R6pGfXEYTR1nKsWUpyQd/view?usp=sharing"
												target="_blank"
											>
												Resume
											</a>
										</li>
									</Animated>
									<Animated
										animationIn="slideInRight"
										animationInDuration={600}
									>
										<li>
											<a
												href="https://www.behance.net/lamtronn"
												target="_blank"
											>
												Behance
											</a>
										</li>
									</Animated>
									<Animated
										animationIn="slideInRight"
										animationInDuration={400}
									>
										<li>
											<a
												href="https://www.facebook.com/tronble"
												target="_blank"
											>
												Facebook
											</a>
										</li>
									</Animated>
									<Animated
										animationIn="slideInRight"
										animationInDuration={200}
									>
										<li>
											<a href="mailto:lamtrn98@gmail.com">Email</a>
										</li>
									</Animated>
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
