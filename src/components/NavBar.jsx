import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Grid, ButtonBase, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import Screensize from './ScreenSize'
import LogoNotSelected from '../icons/LOGO - NOT SELECTED.png'
import LogoSelected from '../icons/LOGO - SELECTED.png'

const muiTheme = createMuiTheme({
    palette: {
        primary: {main: "#f48fb1", contrastText: "#6a1b9a"},
        secondary: {main: "#9e9e9e", contrastText: "#6a1b9a"},
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
        overflow: 'hidden',
        
    },
    logo: {
        marginTop: '-15px',
        height: "10vh",
        margin: "auto",
        marginBottom: '-15px',
        marginLeft: '-15px',
        marginRight: '-15px',
    },
    logoMobile: {
        height: "7vh",
    },
  });
  
  const Wrapper = styled.div`
  min-height: 8vh;
  display: flex;
  align-items: center;
`;


class NavBar extends Component{

    constructor(props, context) {
        super(props, context)
        this.state={
            screenHeight: this.props.screen.screenHeight,
            screenWidth: this.props.screen.screenWidth,
            currentPage: 'secondary',
            colorAbout: 'secondary',
            colorHome: 'secondary',
            colorProjects: 'secondary',
            colorResume: 'secondary',
            colorContact: 'secondary',
            logoSelected: true,

        }
        this.navToAbout = this.navToAbout.bind(this);
        this.navToResume = this.navToResume.bind(this);
        this.navToContact = this.navToContact.bind(this);
        this.navToProjects = this.navToProjects.bind(this);
        this.navToResumeVert = this.navToResumeVert.bind(this);
    }

    navToHome(){
        if (this.state.currentPage !== 'home'){
            this.setState({
                currentPage: 'home',
                colorAbout:'secondary',
                colorHome: 'secondary',
                colorProjects: 'secondary',
                colorResume: 'secondary',
                colorContact: 'secondary',
                logoSelected: true,
            })
            this.props.history.push(`/`);
        }
    }

    navToAbout(){
        if (this.state.currentPage !== 'about'){
            this.setState({
                currentPage: 'about',
                colorAbout:'primary',
                colorHome: 'secondary',
                colorProjects: 'secondary',
                colorResume: 'secondary',
                colorContact: 'secondary',
                logoSelected: false,
            })
            this.props.history.push(`/about`);
        }
    }

    navToResume(){
        if (this.state.currentPage !== 'resume'){
            this.setState({
                currentPage: 'resume',
                colorAbout:'secondary',
                colorHome: 'secondary',
                colorProjects: 'secondary',
                colorResume: 'primary',
                colorContact: 'secondary',
                logoSelected: false,
            })
            this.props.history.push(`/resume`);
        }
    }

    navToContact(){
        if (this.state.currentPage !== 'contact'){
            this.setState({
                currentPage: 'contact',
                colorAbout:'secondary',
                colorHome: 'secondary',
                colorProjects: 'secondary',
                colorResume: 'secondary',
                colorContact: 'primary',
                logoSelected: false,
            })
            this.props.history.push(`/contact`);
        }
    }

    navToProjects(){
        if (this.state.currentPage !== 'projects'){
            this.setState({
                currentPage: 'projects',
                colorAbout:'secondary',
                colorHome: 'secondary',
                colorProjects: 'primary',
                colorResume: 'secondary',
                colorContact: 'secondary',
                logoSelected: false,
            })
            this.props.history.push(`/projects`);
        }
    }

    navToResumeVert(){
        this.props.history.push(`/resume/vert`);
    }

    render(){
        const { classes } = this.props;

        return (
        <Wrapper>
            <span hidden><Screensize /></span>
            <MuiThemeProvider theme={muiTheme}>
                <AppBar position="" className={classes.appBarBackground} >
                    <Toolbar>
                        {this.props.screen.screenWidth > 700 ?
                        <Grid container direction="row" alignItems="center" justify="center" spacing={4}>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToAbout() }}>
                                    <Typography className="navBarText" color={this.state.colorAbout} >
                                        <span className="navBarText">ABOUT</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button" onClick= {() => { this.navToProjects() }}>
                                    <Typography className="navBarText" color={this.state.colorProjects}>
                                        <span className="navBarText">PROJECTS</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase  disableRipple type="button"  onClick= {() => { this.navToHome() }}>
                                    <img hidden={this.state.logoSelected} src={LogoNotSelected} alt="" className={classes.logo}></img>
                                    <img hidden={!this.state.logoSelected} src={LogoSelected} alt="" className={classes.logo}></img>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResume() }}>
                                    <Typography className="navBarText" color={this.state.colorResume}>
                                        <span className="navBarText">RESUME</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToContact() }}>
                                    <Typography className="navBarText" color={this.state.colorContact}>
                                        <span className="navBarText">CONTACT</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        </Grid>

                        :

                        <Grid container direction="row" alignItems="center" justify="center" spacing={0}>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToAbout() }}>
                                    <Typography className="navBarText" color={this.state.colorAbout} >
                                        <span className="navBarTextMobile">ABOUT</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button" onClick= {() => { this.navToProjects() }}>
                                    <Typography className="navBarText" color={this.state.colorProjects}>
                                        <span className="navBarTextMobile">PROJECTS</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase  disableRipple type="button"  onClick= {() => { this.navToHome() }}>
                                    <img hidden={this.state.logoSelected} src={LogoNotSelected} alt="" className={classes.logoMobile}></img>
                                    <img hidden={!this.state.logoSelected} src={LogoSelected} alt="" className={classes.logoMobile}></img>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResume() }}>
                                    <Typography className="navBarText" color={this.state.colorResume}>
                                        <span className="navBarTextMobile">RESUME</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToContact() }}>
                                    <Typography className="navBarText" color={this.state.colorContact}>
                                        <span className="navBarTextMobile">CONTACT</span>
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                        }
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    screen: PropTypes.bool.isRequired
  };

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
 )(withRouter(NavBar))