import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Carousel from '../../components/Carousel'
import Modal from 'react-responsive-modal';
import Button from '@material-ui/core/Button';
import Contact from '../Contact';


export default class AboutMe extends Component {

	styles = {
		card: {
			border: '2px solid firebrick',
			borderRadius: '15px',
			backgroundColor: 'snow',
		},
		image: {
			height:300,
			width:400,
			margin: '0 auto',
			marginTop: 25,
		},
		root: {
			flexgrow: 1,
		},
		modal: {
			maxWidth: 100,
			maxHeight: 100,

		},
		button: {
			backgroundColor: 'firebrick',
		}
	};

	state = {
		open: false
	};

	onOpenModal = () => {
		this.setState({open:true});
	};

	onCloseModal = () => {
		this.setState({open:false});
	};

	render() {
		return(
			<Grid container style={this.styles.root} spacing={8}>
				<Grid iten xs={1}/>
				<Grid item xs={10}>
					<Card style={this.styles.card}>
						<CardContent>
							<Button
								style={this.styles.button} 
								onClick={this.onOpenModal}
								color='secondary'
								variant='contained'
							>
								Check Out My Pictures
							</Button>
							<Modal style={this.styles.modal} open={this.state.open} onClose={this.onCloseModal} center>
								<Carousel/>
							</Modal>			
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={1}/>
				<Grid item xs={1}/>
				<Grid item xs={10}>
					<Card style={this.styles.card}>
						<CardContent>
							<Typography component='p'>
								I am motivated Programmer looking for the oppurtunity
								to become a front-end developer. Currently, I work as 
								Hardware Operations Engineer in New York City. When I'm not
								working I enjoy watching Stand-Up comedy and anime, playing
								video games, baseball, football, and improving my apartment. 
								I have a son (Ethan) and 2 dogs (Flash and Abu) that I enjoy 
								hanging out with and watching them grow up. My passion
								in life is learning and applying that knowledge to real life
								problems. One day I wish to open my own animal shelter to help
								as many stray animals as possible.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={1}/>
				<Grid item xs={1}/>
				<Grid item xs={10}>
					<Contact />
				</Grid>
				<Grid item xs={1}/>
				<Grid item xs={1}/>
				<Grid item xs={10}>
					<Card style={this.styles.card}>
						Dog shelter sites
					</Card>
				</Grid>
				<Grid item xs={1}/>
			</Grid>
		)
	}
}