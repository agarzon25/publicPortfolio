import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class MenuAppBar extends React.Component {

  styles = {
    root: {
      flexGrow: 1,
      backgroundColor: 'darkslategrey',
    },
    div: {
      textAlign: 'center',
      margin: '0 auto'
    },
  };

  render() {
    return (
      <div>
        <AppBar style={this.styles.root} position="static">
          <Toolbar>
              <h1 style={this.styles.div}>
                Welcome to my portfolio!
              </h1>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}