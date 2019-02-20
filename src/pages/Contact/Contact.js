import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from 'react-responsive-modal';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import github from './github.jpg';
import gmail from './home-gmail-icon.png';
import linkedin from './linkedin.png';

export default class Contact extends Component {
	state = {
		open: false,
		name: '',
		email: '',
		message: '',
	};

	styles = {
		card: {
			border: '2px solid firebrick',
			borderRadius: '15px',
			backgroundColor: 'transparent',
		},
		img: {
			width: '50%'
		},
		button: {
			width: '100%',
		},
		text: {
			width: '100%',
		}
	};

	onOpenModal = () => {
		this.setState({open:true});
	};

	onCloseModal = () => {
		this.setState({open:false});
	};

	onChange = (field,event) => {
		// event.preventDefault()
		console.log(field.target.id)
		let id = field.target.id
		console.log(field.target.value)
		let value = field.target.value
		this.setState({[`${id}`]:`[${value}]`})
	};

	onButtonClick = () => {
		const {name,email,message} = this.state
		console.log(this.state.name)
		console.log(this.state.email)
		console.log(this.state.message)
		window.open(`mailto:andrew.garzon.25@gmail.com?subject=Email from ${name}-${email}&body=${message}`)
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
									<TextField
										style={this.styles.text}
										autoComplete='name'
										margin='normal' 
										label='Name' 
										variant='outlined'
										onInput={this.onChange}
										id='name'
									/> 
									<TextField
										style={this.styles.text}
										autoComplete='email' 
										margin='normal' 
										label='Email address' 
										variant='outlined'
										onInput={this.onChange}
										id='email'
									/>
									<TextField
										style={this.styles.text} 
										margin='normal' 
										multiline label='Message' 
										variant='outlined'
										onInput={this.onChange}
										id='message'
									/>
									<Button
										style={this.styles.button}
										color="primary"
										onClick={this.onButtonClick}
									>
										Submit
									</Button> 
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
