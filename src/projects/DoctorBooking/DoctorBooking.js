import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import './DoctorBooking.css';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';

const DoctorBooking = () => (
	<Animated animationIn="fadeIn" animationInDuration={1000}>
		<div className="project-wrapper">
			<img alt="images" src={image1} />
			<img alt="images" src={image2} />
			<img alt="images" src={image3} />
			<img alt="images" src={image4} />
			<img alt="images" src={image5} />
		</div>
	</Animated>
);

export default DoctorBooking;
