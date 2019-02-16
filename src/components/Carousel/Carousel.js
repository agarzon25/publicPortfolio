import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Me from './Me.jpg';
import Jenn_and_I from './Jenn_and_I.jpg';
import Ethan from './Ethan.jpg';
import Flash_and_Abu from './Flash_and_Abu.jpg';
import Grandma_and_bunch from './Grandma_and_bunch.jpg';
import Tiff from './Tiff.jpg';
import tres_commas from './tres_commas.jpg';
 
export default class Carousels extends Component {
    styles = {
      img: {
        // height:'15%',
        // width: '50%'
      },
      div: {
        marginTop: 10,
        paddingTop: 50,
      },
      p: {
        color: 'snow'
      }
    }

    render() {
        return (
            <Carousel>
                <div style={this.styles.div}>
                    <img style={this.styles.img} alt='Me' src={Me} />
                    <p style={this.styles.p}>Me</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='Jenn and I' src={Jenn_and_I} />
                    <p style={this.styles.p}>This is my girlfriend Jenn!</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='Ethan' src={Ethan} />
                    <p style={this.styles.p}>This is my son Ethan. It was his idea to wear the hat.</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='Flash and Abu' src={Flash_and_Abu} />
                    <p style={this.styles.p}>These are my boys! Abu and Flash!</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='Grandma and bunch' src={Grandma_and_bunch} />
                    <p style={this.styles.p}>My Grandma, Grandpa, Uncle, Aunt and my Mom</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='Tiff' src={Tiff} />
                    <p style={this.styles.p}>This is my eldest sibling, Tiff. She hates this picture of herself.</p>
                </div>
                <div>
                    <img style={this.styles.img} alt='The original three' src={tres_commas} />
                    <p style={this.styles.p}>My cousin Alex with a Mohawk, my sister now older, and Me!</p>
                </div>
            </Carousel>
        );
    }
};