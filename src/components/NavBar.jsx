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
        
    }
  });
  //background-color: #f5f5f5;
  const Wrapper = styled.div`
  min-height: 8vh;
  display: flex;
  align-items: center;
  

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
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

        }
        this.navToAbout = this.navToAbout.bind(this);
        this.navToResume = this.navToResume.bind(this);
        this.navToContact = this.navToContact.bind(this);
        this.navToProjects = this.navToProjects.bind(this);
        this.navToResumeVert = this.navToResumeVert.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

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
                        {this.props.screen.screenWidth > 500 ?
                        <Grid container direction="row" justify="center" spacing={4}>
                            
                        <Grid item >
                            
                            <ButtonBase disableRipple type="button"  onClick= {() => { this.navToAbout() }}>
                                <Typography className="navBarText" color={this.state.colorAbout} >ABOUT</Typography>
                            </ButtonBase>
                            {/* <Link style={{ textDecoration: 'none' }} to="/about"><span><h3 className="navBarText">ABOUT</h3></span></Link> */}
                        </Grid>
                        <Grid item >
                            <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResume() }}>
                                <Typography className="navBarText" color={this.state.colorResume}>RESUME</Typography>
                            </ButtonBase>
                            {/* <Link style={{ textDecoration: 'none' }} to="/resume"><span><h3 className="navBarText">RESUME</h3></span></Link> */}
                        </Grid>
                        {/* <Grid item >
                            <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResumeVert() }}>
                                <span><h3 className="navBarText">RESUME-VERT</h3></span>
                            </ButtonBase>
                            <Link style={{ textDecoration: 'none' }} to="/resume/vert"><span><h3 className="navBarText">RESUME-VERT</h3></span></Link>      
                        </Grid> */}
                        <Grid item >
                            <ButtonBase disableRipple type="button" onClick= {() => { this.navToProjects() }}>
                                <Typography className="navBarText" color={this.state.colorProjects}>PROJECTS</Typography>
                            </ButtonBase>
                            {/* <Link style={{ textDecoration: 'none' }} to="/projects"><span><h3 className="navBarText">PROJECTS</h3></span></Link> */}
                        </Grid>
                        <Grid item >
                            <ButtonBase disableRipple type="button"  onClick= {() => { this.navToContact() }}>
                                <Typography className="navBarText" color={this.state.colorContact}>CONTACT</Typography>
                            </ButtonBase>
                            {/* <Link style={{ textDecoration: 'none' }} to="/contact"><span><h3 className="navBarText">CONTACT</h3></span></Link> */}
                        </Grid>
                        
                    </Grid>
                        :
                        <Grid container direction="row" justify="center" spacing={0}>
                            <Grid item >
                                
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToAbout() }}>
                                    <Typography className="navBarTextMobile" color={this.state.colorAbout} >ABOUT</Typography>
                                </ButtonBase>
                                {/* <Link style={{ textDecoration: 'none' }} to="/about"><span><h3 className="navBarText">ABOUT</h3></span></Link> */}
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResume() }}>
                                    <Typography className="navBarTextMobile" color={this.state.colorResume}>RESUME</Typography>
                                </ButtonBase>
                                {/* <Link style={{ textDecoration: 'none' }} to="/resume"><span><h3 className="navBarText">RESUME</h3></span></Link> */}
                            </Grid>
                            {/* <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToResumeVert() }}>
                                    <span><h3 className="navBarText">RESUME-VERT</h3></span>
                                </ButtonBase>
                                <Link style={{ textDecoration: 'none' }} to="/resume/vert"><span><h3 className="navBarText">RESUME-VERT</h3></span></Link>      
                            </Grid> */}
                            <Grid item >
                                <ButtonBase disableRipple type="button" onClick= {() => { this.navToProjects() }}>
                                    <Typography className="navBarTextMobile" color={this.state.colorProjects}>PROJECTS</Typography>
                                </ButtonBase>
                                {/* <Link style={{ textDecoration: 'none' }} to="/projects"><span><h3 className="navBarText">PROJECTS</h3></span></Link> */}
                            </Grid>
                            <Grid item >
                                <ButtonBase disableRipple type="button"  onClick= {() => { this.navToContact() }}>
                                    <Typography className="navBarTextMobile" color={this.state.colorContact}>CONTACT</Typography>
                                </ButtonBase>
                                {/* <Link style={{ textDecoration: 'none' }} to="/contact"><span><h3 className="navBarText">CONTACT</h3></span></Link> */}
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
  
// export default withRouter(withStyles(styles)connect(mapStateToProps)(NavBar));


export default compose(
    withStyles(styles),
    connect(mapStateToProps)
 )(withRouter(NavBar))