import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import './Project_1.css';

import image1 from './images/0031_14.jpg';
const Project_1 = () => (
	<Animated animationIn="fadeIn" animationInDuration={1000}>
		<div className="project-wrapper">
			<img alt="images" src={image1} />
		</div>
	</Animated>
);

export default Project_1;
