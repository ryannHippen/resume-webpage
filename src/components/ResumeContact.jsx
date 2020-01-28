import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, BottomNavigation, Divider, Typography, Grid, Box, Button,
TextField, Tooltip} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import SaveIcon from '@material-ui/icons/Save';


Amplify.configure({
    Auth: {
      mandatorySignIn: false,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
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
        
    },
    paperContainer: {
        overflow: 'hidden'
    },
    typographyColor: {
        color: 'white'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
  }); 

class ResumeContact extends Component{

    navToGitHub = () => {  
        window.open("https://github.com/ryannHippen", "_blank")
    }  
    
    navToLinkedIn = () => {  
        window.open("https://www.linkedin.com/in/ryann-hippen-078334167", "_blank")
    }  

    render(){
        const styles = {
            paperContainer: {
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            bottomNavigationContainer: {
                backgroundColor: 'transparent', 
            },
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: '7px',
                marginRight: '7px',
                width: 200,
            },
            singleLineTextField: {
                // marginLeft: '7px',
                // marginRight: '7px',
                width: 414,
            },
            buttonContainer: {
                backgroundColor: 'transparent',
            },
          };

          const getResume = () => {  
            // Storage.get('Ryann Hippen - Resume.pdf').then(data => {
            //     window.open(data, "_blank")
            // })
            // .catch(err => {
            //     console.log('error downloading resume')
            // })
            window.open('', "_blank")
        };  

        return (
            <Paper style={styles.paperContainer}>
                <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="First Name"
                            defaultValue=""
                            style={styles.textField}
                            margin="normal"
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Last Name"
                            defaultValue=""
                            style={styles.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="Organization"
                            defaultValue=""
                            style={styles.singleLineTextField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-name"
                            label="Position"
                            defaultValue=""
                            style={styles.singleLineTextField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-name"
                            label="Contact Number"
                            defaultValue=""
                            style={styles.textField}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Email Address"
                            defaultValue=""
                            style={styles.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-name"
                            label="Message"
                            multiline
                            defaultValue=""
                            style={styles.singleLineTextField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>              
                <BottomNavigation style={styles.bottomNavigationContainer}>  
                    <Tooltip title="My GitHub Homepage">
                        <Button onClick={this.navToGitHub} size="small">
                            <GitHub />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Download Resume">
                        <Button onClick={getResume} size="small">
                            <SaveIcon />
                        </Button> 
                    </Tooltip>
                    <Tooltip title="My LinkedIn Homepage">
                        <Button onClick={this.navToLinkedIn} size="small">
                            <LinkedIn />
                        </Button>
                    </Tooltip>
                </BottomNavigation>
            </Paper>
        )
    }
}

ResumeContact.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ResumeContact);