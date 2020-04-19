import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import './Notebud.css';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image3b from './images/3b.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';

const Notebud = () => (
	<Animated animationIn="fadeIn" animationInDuration={1000}>
		<div className="project-wrapper">
			<img alt="images" src={image1} />
			<img alt="images" src={image2} />
			<img alt="images" src={image3} />
			<img alt="images" src={image3b} />
			<img alt="images" src={image4} />
			<img alt="images" src={image5} />
			<img alt="images" src={image6} />
			<img alt="images" src={image7} />

		</div>
	</Animated>
);

export default Notebud;
