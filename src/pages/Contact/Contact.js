import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Modal from 'react-responsive-modal';
import github from './github.jpg';
import gmail from './home-gmail-icon.png';
import linkedin from './linkedin.png';

export default class Contact extends Component {
	state = {
		open: false
	};

	styles = {
		card: {
			border: '2px solid firebrick',
			borderRadius: '15px',
			backgroundColor: 'snow',
		},
		img: {
			// height: '100%',
			width: '100%'
		}
	};

	onOpenModal = () => {
		this.setState({open:true});
	};

	onCloseModal = () => {
		this.setState({open:false});
	};

	handleClick = (icon) => {
		switch(icon) {
			case 'github':
				window.location = 'https://github.com/agarzon25'
				break;
			case 'gmail':
				window.location = {Modal}
				break;
			case 'linkedin':
				window.location = 'https://www.linkedin.com/in/andrew-garzon-869a0843/'
				break;
			default:
				return
		}
	};

	render() {
		return(
			<Grid container spacing={8}>
				<Grid item xs={4}>
					<Card style={this.styles.card}>
						<CardContent>
							<img
								alt='github'
								style={this.styles.img}
								src={github} 
								onClick={() => {this.handleClick('github')}}
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card style={this.styles.card}>
						<CardContent>
							<img 
								style={this.styles.img}
								src={gmail} 
								onClick={() => {this.handleClick('gmail')}}
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card style={this.styles.card}>
						<CardContent>
							<img
								style={this.styles.img}
								src={linkedin} 
								onClick={() => {this.handleClick('linkedin')}}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		)
	}
}
