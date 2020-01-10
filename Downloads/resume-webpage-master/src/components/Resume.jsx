import React, { Component } from 'react';
import { Typography, Grid, ButtonBase, 
    Box, Button, Divider, Paper, 
    BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from '../aws-exports';
import SaveIcon from '@material-ui/icons/Save';
import config from '../ampconfig';
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import BottomNavBar from './BottomNavBar';

// Amplify.configure(awsconfig); 
// Amplify.configure(ampconfig); 

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

class Resume extends Component{

    getResume = () => {  
        Storage.get('Ryann Hippen - Resume.pdf').then(data => {
            window.open(data, "_blank")
        })
        .catch(err => {
            console.log('error downloading resume')
        })
    }  

    render(){

        const styles = {
            paperContainer: {
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            paperContainer2: {
                height: '76vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }
          };

        return (
            <Box>
                <Paper style={styles.paperContainer}>
                    <Grid container justify="center" alignItems="center">
                        <Button
                            onClick={this.getResume}
                            size="large "
                            startIcon={<SaveIcon />}
                            variant="outlined"
                            >
                            <Typography>Download Resume</Typography>
                        </Button>
                </Grid>
                </Paper>
                <Paper style={styles.paperContainer2}>
                <Grid container direction="row" justify="center" alignItems="center"     >
                    <Grid item  xs={12} sm={6}>
                        <Typography align="center">Technologies</Typography>
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                        <Typography align="center">Technologies Listed</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container direction="row" justify="center" alignItems="center"     >
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">Education</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">Education Listed</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container direction="row" justify="center" alignItems="center"     >
                    <Grid item xs={12} sm={6} >
                        <Typography align="center">Work Experience</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography align="center">Work Experience listed</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container direction="row" justify="center" alignItems="center"     >
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">Contact Me</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">Contact Me</Typography>
                    </Grid>
                </Grid>                    
                </Paper>
            </Box>
        )
    }
}

export default Resume