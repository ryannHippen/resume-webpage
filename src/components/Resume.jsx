import React, { Component } from 'react';
import { Typography, Grid,
    Box, Button, Divider, Paper, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from '../aws-exports';
import SaveIcon from '@material-ui/icons/Save';
import config from '../ampconfig';
// import DevIcon from "devicon-react-svg";
import Hibernate from '../icons/hibernate.svg'
import Material from '../icons/material.svg'
import Springio from '../icons/springio.svg'
import Bootstrap from '../icons/bootstrap.svg'
import Css from '../icons/css3.svg'
import Html from '../icons/html.svg'
import Reactjs from '../icons/reactjs.svg'
import Mysql from '../icons/mysql.svg'
import Javascript from '../icons/javascript.svg'
import Github from '../icons/github.svg'
import Java from '../icons/java.svg'
import Aws from '../icons/aws.svg'
import Route53 from '../icons/route53.svg'
import S3 from '../icons/s3.svg'
import Cloudfront from '../icons/cloudfront.svg'
import Git from '../icons/git.svg'
import Python from '../icons/python.svg'

// const Demo = props => {
//     return (<RandomIcon />);
// }

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
        // Storage.get('Ryann Hippen - Resume.pdf').then(data => {
        //     window.open(data, "_blank")
        // })
        // .catch(err => {
        //     console.log('error downloading resume')
        // })
        window.open('', "_blank")
    }  

    render(){

        const styles = {
            paperContainer: {
                minHeight: '91vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'lightpink',
                boxShadow: 'none',
                paddingTop: '20%',
                paddingBottom: '25%'
            },
            paperContainer2: {
                minHeight: '85vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            paperContainerGrid: {
                width: '50vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }, 
            paperContainerGridLeft: {
                width: '45vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }, 
            paperContainerGridRight: {
                width: '55vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }, 
            buttonContainer: {
                backgroundColor: 'transparent',
            },
            devIconStyle: {
                height: "20px",
                margin: "auto",
            },
          };

        return (
            <Box >                
                <Paper  style={styles.paperContainer} >
                    <Grid container direction="row"  >
                        <Paper style={styles.paperContainerGrid} > 
                            <Grid container  justify="center">
                                <Box className="resumeDiv" border={3} >
                                    <Button
                                        color='primary'
                                        style={styles.buttonContainer}
                                        onClick={this.getResume}
                                        size="small"
                                        startIcon={<SaveIcon />}
                                        fullWidth={true}
                                        >
                                        <Typography color='primary'  variant="subtitle2" >Download Resume</Typography>
                                    </Button> 
                                </Box> 
                            </Grid>                                
                        </Paper>
                        <Paper style={styles.paperContainerGrid} >
                            <Typography align="left">Download Resume</Typography>
                        </Paper>                          
                    </Grid>              
                </Paper>
                <Divider orientation='middle' />                
                <Paper style={styles.paperContainer2} >
                    <Grid container direction="row" justify="" alignItems=""     >
                    <Paper style={styles.paperContainerGridLeft} >
                        <Box mt={5} container justify="left">
                            <Typography variant="h6" align="center">Technologies</Typography>
                        </Box>
                    </Paper>                   
                    <Paper style={styles.paperContainerGridRight} >
                        <Grid container justify="" alignItems="">
                            <Grid item>                                
                                <Box container direction="column" pr={7} my={4}>
                                    <List dense={false} >
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon >
                                                {/* <DevIcon icon="react" style={styles.devIconStyle} /> */}
                                                <img src={Reactjs} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary=" React.js" /> 
                                            {/* <Rating style={styles.ratingSpace} name="read-only" size="small" value={3} readOnly /> */}
                                        </ListItem>
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Material} alt="" style={styles.devIconStyle}></img>                                        
                                            </ListItemIcon>
                                            <ListItemText primary="Material UI" /> 
                                        </ListItem>                                        
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Bootstrap} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Bootstrap" />
                                        </ListItem>
                                        <ListItem disableGutters={true}> 
                                            <ListItemIcon>
                                                <img src={Javascript} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="JavaScript" />                               
                                        </ListItem>
                                                                              
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item>       
                                <Box container direction="row" pr={7} my={4}>
                                    <List dense={false} >
                                    <ListItem disableGutters={true}> 
                                            <ListItemIcon>
                                                <img src={Python} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Python" />                                 
                                        </ListItem>
                                        <ListItem disableGutters={true}> 
                                            <ListItemIcon>
                                                <img src={Css} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="CSS" />                                  
                                        </ListItem>
                                        <ListItem disableGutters={true}> 
                                            <ListItemIcon>
                                                <img src={Html} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="HTML" />                                 
                                        </ListItem>    
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Springio} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Spring Boot" />                                      
                                        </ListItem>                                                                                
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item>       
                                <Box container direction="row"pr={7} my={4}>
                                    <List dense={false} >                                    
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Java} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Java" />
                                        </ListItem>                                        
                                        <ListItem disableGutters={true}>  
                                            <ListItemIcon> 
                                                <img src={Cloudfront} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="AWS: CloudFront" />   
                                        </ListItem>
                                        <ListItem disableGutters={true}>  
                                            <ListItemIcon> 
                                                <img src={Route53} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="AWS: Route 53" />  
                                        </ListItem>
                                        <ListItem disableGutters={true}>  
                                            <ListItemIcon> 
                                                <img src={S3} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="AWS: S3" />   
                                        </ListItem>                                                                              
                                    </List>
                                </Box>
                            </Grid>
                            <Grid item>       
                                <Box container direction="row" my={4}>
                                    <List dense={false} >
                                        <ListItem disableGutters={true}> 
                                            <ListItemIcon>
                                                <img src={Hibernate} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Hibernate" />
                                        </ListItem>
                                        <ListItem disableGutters={true}>   
                                            <ListItemIcon> 
                                                <img src={Mysql} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="MySQL" />   
                                        </ListItem>                                                                                  
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Github} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="GitHub" /> 
                                        </ListItem>
                                        <ListItem disableGutters={true}>
                                            <ListItemIcon>
                                                <img src={Git} alt="" style={styles.devIconStyle}></img>
                                            </ListItemIcon>
                                            <ListItemText primary="Git" />  
                                        </ListItem>                                        
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                    <Divider variant="middle" />                    
                    <Grid container direction="row" justify="" alignItems=""     >
                    <Paper style={styles.paperContainerGridLeft} >
                        <Box mt={5} container justify="left">
                            <Typography variant="h6" align="center">Education</Typography>
                        </Box>
                    </Paper>                   
                    <Paper style={styles.paperContainerGridRight} >
                        <Box container direction="row" my={4}>
                            <Grid container direction="column" column justify="" alignItems="">
                                <Grid item>  
                                    <Box my={1} container justify="left">                            
                                        <Typography>Wright State University, Fairborn OH</Typography>
                                    </Box>  
                                </Grid>
                                <Grid item>
                                    <Box my={1} container justify="left">                            
                                        <Typography>B.S.B - Management Information Systems</Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box my={1} container justify="left">                            
                                        <Typography>Graduated December 2018</Typography>
                                    </Box> 
                                </Grid>
                                <Grid item>
                                    <Box my={1} container justify="left">                            
                                        <Typography>GPA 3.81/4.00</Typography>
                                    </Box> 
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container direction="row" justify="" alignItems=""     >
                    <Paper style={styles.paperContainerGridLeft} >
                        <Box mt={5} container justify="left">
                            <Typography variant="h6" align="center">Work Experience</Typography>
                        </Box>
                    </Paper>                   
                    <Paper style={styles.paperContainerGridRight} >
                        <Grid container justify="" alignItems="">
                            <Grid item>                                
                                
                            </Grid>
                            <Grid item>                                
                                
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container direction="row" justify="" alignItems=""     >
                    <Paper style={styles.paperContainerGridLeft} >
                        <Box mt={5} container justify="left">
                            <Typography variant="h6" align="center">Contact Me</Typography>
                        </Box>
                    </Paper>                   
                    <Paper style={styles.paperContainerGridRight} >
                        <Grid container justify="" alignItems="">
                            <Grid item>                                
                                
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>                   
                </Paper>
            </Box>
        )
    }
}

export default Resume
