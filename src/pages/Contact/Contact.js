import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from 'react-responsive-modal';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
			width: '50%'
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
								alt='gmail'
								style={this.styles.img}
								src={gmail} 
								onClick={this.onOpenModal}
							/>
							<Modal
								open={this.state.open}
								onClose={this.onCloseModal}
								focusTrapped
							>
								<MuiThemeProvider> 
									<TextField label='Name' variant='outlined'/> 
									<TextField label='Email address' variant='outlined'/>
									<TextField label='Message' variant='outlined'/>
								</MuiThemeProvider>	
							</Modal>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card style={this.styles.card}>
						<CardContent>
							<img
								alt='linkedin'
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
