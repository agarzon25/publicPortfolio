import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import github from './github.jpg';
import gmail from './home-gmail-icon.png';
import linkedin from './linkedin.png';

export default class Contact extends Component {
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

	handleClick = () => {
		console.log("this clicks")
	};

	render() {
		return(
			<Grid container spacing={8}>
				<Grid item xs={4}>
					<Card style={this.styles.card}>
						<CardContent>
							<img 
								style={this.styles.img}
								src={github} 
								onClick={this.handleClick}
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
								onClick={this.handleClick}
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
								onClick={this.handleClick}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		)
	}
}
