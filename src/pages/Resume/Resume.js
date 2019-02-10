import React, { Component } from 'react';
import resume_1 from './AXG_Resume-1.png';
import resume_2 from './AXG_Resume-2.png';

export default class Resume extends Component {

	style = {
		page: {
			width: '100%'
		}
	}

	render() {

		return(
			<div>
				<img
					style={this.style.page}
					src={resume_1} 
					alt='resume_1'
				/>
				<img
					style={this.style.page}
					src={resume_2} 
					alt='resume_2'
				/>
			</div>
		)
	}
}