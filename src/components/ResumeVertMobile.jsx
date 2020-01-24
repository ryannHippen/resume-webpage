import React, { useState } from 'react';
import { Typography, Grid,
    Box, Button, ListSubheader, Paper, List, 
    ListItem, ListItemText, ListItemIcon, Container,
     Divider, Card, CardActionArea, CardContent, CardHeader,
    CardMedia, CardActions } from '@material-ui/core';
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
import Redux from '../icons/redux.svg'
import Wrightstate from '../icons/wrightState.svg'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
import { connect } from 'react-redux';



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

  

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
      
    };
  }

  const theme = createMuiTheme({
    palette: {
      primary: {main: '#FCF8D2'},
      secondary: {main: '#10EDFB'}
    },
  });

  const work = [
      {'company': 'Tata Consultancy Services', 'title' : 'Software Engineer', 'location' : 'Milford, OH' ,
      'description': [
        'Went through training for 8 weeks with Java, Spring Boot, Hibernate, Angular using both MySQL and Oracle DB as the backend.', 
        'Worked in a team of 5 to create a Web Application for users to create a profile, upload a resume and then get evaluated based on skills to potentially be assigned a project/client.',
        'As a personal project I’ve created a to do application that uses Spring Boot to connect to a MySQL DB with ReactJS as the front end.',
        'Another personal project was used connecting to an external API with ReactJS as the front end to allow users to explore video game genres and games that are a part of the genre. I’m continuing to expand on this project currently to include more functionality.',
    ],
       'bulletPoints' : 
      ['','Technologies used were Spring Boot with Hibernate/JPA which connected to a MySQL backend, and Angular for the front end connecting to Spring Boot with REST API','', '']},

      {'company': 'Marxent Labs',  'title' : 'Data Specialist', 'location' : 'Miamisburg, OH' ,
      'description': [''],
      'bulletPoints' : 
      ['point','point']},
      
      {'company': 'Reynolds & Reynolds', 'title' : 'Software Support Specialist', 'location' : 'Kettering, OH' ,
      'description': [''], 
      'bulletPoints' : 
      ['point','point']},
    ]

    const technologies = [
        {'technology': 'React.js', 'svg': Reactjs},
        {'technology': 'Material UI', 'svg': Material},
        {'technology': 'Bootstrap', 'svg': Bootstrap},
        {'technology': 'JavaScript', 'svg': Javascript},
        {'technology': 'CSS', 'svg': Css},
        {'technology': 'HTML', 'svg': Html},
        {'technology': 'Redux', 'svg': Redux},
        {'technology': 'Java', 'svg': Java},
        {'technology': 'AWS: Cloudfront', 'svg': Cloudfront},
        {'technology': 'AWS: Route 53', 'svg': Route53},
        {'technology': 'AWS: S3', 'svg': S3},
        {'technology': 'Python', 'svg': Python},
        {'technology': 'Hibernate', 'svg': Hibernate},
        {'technology': 'MySQL', 'svg': Mysql},
        {'technology': 'Spring Boot', 'svg': Springboot},
    ]
  
  const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        minHeight: '92vh',
        backgroundColor: '#C00149',
        boxShadow: 'none',
        alignItems: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    tabs: {
        borderRight: `0px solid ${theme.palette.divider}`,
        marginTop: 30,
        marginBottom: 30,
        color: 'white',  
    },
    paperContainer: {
        // overflow: 'hidden',
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '60vw',
        paddingBottom: '10px',
        paddingTop: '10px',
        //minHeight: '70vh',
    },
    paperContainerLeft: {
        // overflow: 'hidden',
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '20vw',
    },
    paperContainerRight: {
        // overflow: 'hidden',
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '40vw',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
    },
    devIconStyle: {
        height: "20px",
        margin: "auto",
    },
    schoolIconStyle: {
        height: "200px",
        margin: "auto",
        opacity: 0.75,
    },
    card: {
        maxWidth: 450,
    },
    educationFont: {
        paddingLeft: '10px',
        paddingRight: '10px',
        fontFamily: 'EB Garamond',
        fontSize: '22px',
        fontStyle: 'italic',
        fontWeight: 500,
        color: '#FCF8D2'
    },
    tabPosition: {
        position: 'absolute',
    }
  }));
  
 function VerticalTabs({screen}) {
    const screenHeight = screen.screenHeight;
    const screenWidth = screen.screenWidth;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const bull = <span className={classes.bullet}>•</span>;
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
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
<MuiThemeProvider theme={theme}>
    <div className={classes.root}>
        
        <Tabs 
          orientation="vertical"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        //   textColor="primary"
        >
    
        {/* <Tab className={classes.tabs} label="Download Resume" {...a11yProps(0)}></Tab> */}

        <Tab className={classes.tabs} label="Technologies" {...a11yProps(0)} />

        <Tab className={classes.tabs} label="Education" {...a11yProps(1)} />

        <Tab className={classes.tabs} label="Work Experience" {...a11yProps(2)}  />

        <Tab className={classes.tabs} label="Contact Me" {...a11yProps(3)} />
       
        </Tabs>
        <Container maxWidth='lg' disableGutters>
            {/* <TabPanel  value={value} index={0}>
                <Grid container  justify="center" >
                    <Box className="resumeDiv" border={3} >
                        <Button
                            color='primary'
                            className={classes.buttonContainer}
                            onClick={getResume}
                            size="small"
                            startIcon={<SaveIcon />}
                            fullWidth={true}
                            >
                            <Typography color='primary'  variant="subtitle2" >Download Resume</Typography>
                        </Button> 
                    </Box> 
                </Grid>                                
            </TabPanel> */}
            <TabPanel value={value} index={0} >
                <Grid container direction="row" justify="center" spacing={10} >
                    <Grid item >
                        <Card className={classes.card} variant="elevation" elevation={10}>
                            <CardContent>
                                 <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Front End
                                </Typography>
                                <Box container >
                                    <Grid container direction="row" justify="space-around"      >
                                        <Grid item>                                
                                            <Box container direction=""   >
                                                <List dense={false}>
                                                    <ListItem disableGutters={true}>
                                                        <ListItemIcon >
                                                            <img src={Reactjs} alt="" className={classes.devIconStyle}></img>
                                                        </ListItemIcon>
                                                        <ListItemText primary=" React.js" /> 
                                                    </ListItem>
                                                    <ListItem disableGutters={true}>
                                                        <ListItemIcon>
                                                            <img src={Material} alt="" className={classes.devIconStyle}></img>                                        
                                                        </ListItemIcon>
                                                        <ListItemText primary="Material UI" /> 
                                                    </ListItem>                                        
                                                    <ListItem disableGutters={true}>
                                                        <ListItemIcon>
                                                            <img src={Bootstrap} alt="" className={classes.devIconStyle}></img>
                                                        </ListItemIcon>
                                                        <ListItemText primary="Bootstrap" />
                                                    </ListItem>
                                                    <ListItem disableGutters={true}> 
                                                        <ListItemIcon>
                                                            <img src={Javascript} alt="" className={classes.devIconStyle}></img>
                                                        </ListItemIcon>
                                                        <ListItemText primary="JavaScript" />                               
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Grid>
                                    <Grid item >       
                                        <Box container direction=""  >
                                            <List dense={false} >                                    
                                                <ListItem disableGutters={true}> 
                                                    <ListItemIcon>
                                                        <img src={Css} alt="" className={classes.devIconStyle}></img>
                                                    </ListItemIcon>
                                                    <ListItemText primary="CSS" />                                  
                                                </ListItem>
                                                <ListItem disableGutters={true}> 
                                                    <ListItemIcon>
                                                        <img src={Html} alt="" className={classes.devIconStyle}></img>
                                                    </ListItemIcon>
                                                    <ListItemText primary="HTML" />                                 
                                                </ListItem>    
                                                <ListItem disableGutters={true}>
                                                    <ListItemIcon>
                                                        <img src={Redux} alt="" className={classes.devIconStyle}></img>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Redux" />                                      
                                                </ListItem>                                                                                
                                            </List>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card className={classes.card} variant="elevation" elevation={10}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Back End
                            </Typography>
                            <Box container >
                                <Grid container direction="row" justify="space-around" alignItems=""     >
                                    <Grid item>                                
                                        <Box container direction=""   >
                                        <List dense={false} >                                    
                                            <ListItem disableGutters={true}>
                                                <ListItemIcon>
                                                    <img src={Java} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="Java" />
                                            </ListItem>                                                                          
                                            <ListItem disableGutters={true}>  
                                                <ListItemIcon> 
                                                    <img src={Cloudfront} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="AWS: CloudFront" />   
                                            </ListItem>
                                            <ListItem disableGutters={true}>  
                                                <ListItemIcon> 
                                                    <img src={Route53} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="AWS: Route 53" />  
                                            </ListItem>
                                            <ListItem disableGutters={true}>  
                                                <ListItemIcon> 
                                                    <img src={S3} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="AWS: S3" />   
                                            </ListItem>                                                                              
                                        </List>
                                    </Box>
                                </Grid>
                                <Grid item>       
                                    <Box container direction="" >
                                    <List dense={false}>
                                            <ListItem disableGutters={true}> 
                                                <ListItemIcon>
                                                    <img src={Python} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="Python" />                                 
                                            </ListItem>  
                                            <ListItem disableGutters={true}> 
                                                <ListItemIcon>
                                                    <img src={Hibernate} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="Hibernate" />
                                            </ListItem>
                                            <ListItem disableGutters={true}>   
                                                <ListItemIcon> 
                                                    <img src={Mysql} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary="MySQL" />   
                                            </ListItem>
                                            <ListItem disableGutters={true}>
                                                    <ListItemIcon>
                                                        <img src={Springio} alt="" className={classes.devIconStyle}></img>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Spring Boot" />                                      
                                            </ListItem>    
                                        </List>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}  >
                <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item>  
                        <Box container>
                            <img src={Wrightstate} alt="" className={classes.schoolIconStyle}></img>                            
                        </Box>  
                    </Grid>
                    <Grid item >
                        <Box container mt={5}>                            
                            <Typography className={classes.educationFont}>B.S.B - Management Information Systems</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFont}>Graduated - December 2018</Typography>
                        </Box> 
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFont}>GPA - 3.81/4.00</Typography>
                        </Box> 
                    </Grid>
                </Grid>
            </TabPanel >
            <TabPanel value={value} index={2} >
                {work.map(job =>  
                    <Box pb={3}> 
                        <Paper className={classes.paperContainer}> 
                            <Grid container direction='row' >
                                <Paper className={classes.paperContainerLeft}>
                                    <Grid container justify='center' >
                                        {job.company}
                                    </Grid>
                                </Paper> 
                                <Paper className={classes.paperContainerRight}>
                                    {job.description.map((desc, i) =>    
                                        <Typography key={i}>
                                            <Box pb={1}>{desc}</Box>
                                            
                                            {job.bulletPoints[i].length > 0 ? 
                                                <ul>
                                                    <li >{job.bulletPoints[i]}</li>
                                                </ul>
                                                :null
                                            }
                                        </Typography>
                                    )}
                                </Paper>
                            </Grid>
                        </Paper>
                    </Box> 
                )}
                {/* <Box container p={10}>
                    {work.map(job =>
                        <Box pb={5}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>{job.company}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    <Typography>{job.description}</Typography>
                                    <ul>
                                        
                                    {job.bulletPoints.map((bullet, i) =>    
                                        <li key={i}>{bullet}</li>
                                        )}
                                    </ul>
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Box>
                    )}
                </Box> */}
            </TabPanel>
            <TabPanel value={value} index={3} >
                dfdsfds
            {screen !== undefined ? 
                <Typography>{screen.screenWidth }</Typography>
                :null
            }
            </TabPanel>
        </Container>
    </div>
    </MuiThemeProvider>
    );
  }

  function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

  export default connect(mapStateToProps)(VerticalTabs)