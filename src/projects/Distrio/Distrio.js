import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import './Distrio.css';

import image1 from './images/1.png';
const Distrio = () => (
	<Animated animationIn="fadeIn" animationInDuration={1000}>
		<div className="project-wrapper">
			<img alt="images" src={image1} />
		</div>
	</Animated>
);

export default Distrio;
