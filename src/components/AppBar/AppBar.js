import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export default class MenuAppBar extends React.Component {

  styles = {
    root: {
      flexGrow: 1,
      backgroundColor: 'darkslategrey',
    },
    div: {
      padding: 15,
      textAlign: 'center',
      margin: '0 auto',
      fontFamily: '"Gloria Hallelujah", cursive'
    },
  };

  render() {
    return (
      <div>
        <AppBar style={this.styles.root} position="static">
          <h1 style={this.styles.div}>
            I am Andrew X. Garzon
          </h1>
        </AppBar>
      </div>
    );
  }
}