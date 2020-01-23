import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, BottomNavigation, Divider, Typography, Grid, Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import { createMuiTheme }  from "@material-ui/core/styles";
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
// import  *  as Colors from '@material-ui/core/colors';


// const muiTheme = createMuiTheme({
//     palette: {
//         primary: {main: "#f48fb1", contrastText: "#6a1b9a"},
//         secondary: Colors.blueGrey,
//         position: 'absolute',
        
//     },

//   });

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
        
    },
    paperContainer: {
        overflow: 'hidden'
    },
    typographyColor: {
        color: 'white'
    }
  }); 

class BottomNavBar extends Component{

    navToGitHub = () => {  
        window.open("https://github.com/ryannHippen?tab=repositories", "_blank")
    }  
    
    navToLinkedIn = () => {  
        window.open("https://www.linkedin.com/in/ryann-hippen-078334167", "_blank")
    }  

    render(){
        const styles = {
            paperContainer: {
                // height: '15vh',
                // width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            bottomNavigationContainer: {
                backgroundColor: 'transparent', 

            }
          };

        return (
            <Paper style={styles.paperContainer}>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Box width='75%'>
                        <Divider variant="inset" />
                    </Box>
                </Grid>
                
                <Grid container direction="row" justify="center" alignItems="center"     >
                        <Grid item xs={12} sm={4}>
                            <Typography align="center">Email</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography align="center">Phone</Typography>
                        </Grid>
                    </Grid>
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Box width='75%' >
                        <Divider variant="inset" />
                    </Box>
                </Grid>              
                <BottomNavigation style={styles.bottomNavigationContainer}>    
                    {/* <BottomNavigationAction 
                        label="LinkedIn" 
                        value="LinkedIn" 
                        icon={<LinkedIn />}
                        onClick={this.navToLinkedIn}
                        size="sm"
                    />
                    <BottomNavigationAction 
                        label="GitHub" 
                        value="favorites" 
                        icon={<GitHub />} 
                        onClick={this.navToGitHub}
                        size="sm"
                    /> */}

                    <Button onClick={this.navToGitHub}>
                        <GitHub />
                    </Button>
                    <Button onClick={this.navToLinkedIn}>
                        <LinkedIn />
                    </Button>
                </BottomNavigation>
            </Paper>
        )
    }
}

BottomNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(BottomNavBar);