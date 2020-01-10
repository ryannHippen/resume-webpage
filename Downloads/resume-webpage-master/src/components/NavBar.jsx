import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Grid, Button, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  *  as Colors from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";


const muiTheme = createMuiTheme({
    palette: {
        primary: {main: "#f48fb1", contrastText: "#6a1b9a"},
        secondary: Colors.blueGrey,
        position: 'absolute',
        
    },

  });

const styles = theme => ({
    root: {
      flexGrow: 1,  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBarBackground: {
        background: "transparent",
        boxShadow: "None",
        paddingTop: 10,
        overflow: 'hidden'
        
    }
  }); 

class NavBar extends Component{

    constructor(props) {
        super(props)
        this.navToAbout = this.navToAbout.bind(this);
        this.navToEducation = this.navToEducation.bind(this);
        this.navToContact = this.navToContact.bind(this);
        this.navToProjects = this.navToProjects.bind(this);
    }

    navToAbout(){
        this.props.history.push(`/about`);
    }

    navToEducation(){
        this.props.history.push(`/resume`);
    }

    navToContact(){
        this.props.history.push(`/contact`);
    }

    navToProjects(){
        this.props.history.push(`/projects`);
    }

    render(){
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={muiTheme}>
                <AppBar position="" className={classes.appBarBackground} >
                    <Toolbar>
                        <Grid container direction="row" justify="center" spacing={4}>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToAbout() }}>
                                    <span><h3 className="navBarText">ABOUT</h3></span>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToEducation() }}>
                                    <span><h3 className="navBarText">RESUME</h3></span>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button" onClick= {() => { this.navToProjects() }}>
                                    <span><h3 className="navBarText">PROJECTS</h3></span>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToContact() }}>
                                    <span><h3 className="navBarText">CONTACT</h3></span>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withRouter(withStyles(styles)(NavBar));