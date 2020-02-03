import React from 'react';
import { Typography, Grid, Box, Paper, List, ListItem, ListItemText, ListItemIcon, Container, Card, CardContent } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import Hibernate from '../icons/hibernate.svg'
import Material from '../icons/material.svg'
import Springio from '../icons/springio.svg'
import Bootstrap from '../icons/bootstrap.svg'
import Css from '../icons/css3.svg'
import Html from '../icons/html.svg'
import Reactjs from '../icons/reactjs.svg'
import Mysql from '../icons/mysql.svg'
import Javascript from '../icons/javascript.svg'
import Java from '../icons/java.svg'
import Route53 from '../icons/route53.svg'
import S3 from '../icons/s3.svg'
import Cloudfront from '../icons/cloudfront.svg'
import Python from '../icons/python.svg'
import Redux from '../icons/redux.svg'
import Wrightstate from '../icons/wrightState.svg'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
import { connect } from 'react-redux';
import ResumeContact from './ResumeContact'
import ResumeContactMobile from './ResumeContactMobile'

// Amplify.configure(awsconfig); 
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
      secondary: {main: '#84ffff'}
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
        'description': ['Work with Business Analysts to obtain client specific information for the products that will be in the application and what the application itself needs.',
        'Work with the Development team to work out a spec sheet for the product data and application data',
        'Use MySQL for CRUD operations to ensure data requirements are met.',
        'Work with Project Managers regarding client deadlines, and coordinate with the 3D department as part of my work is dependent on 3D models to be completed.'],
      
        'bulletPoints' : 
      ['','','','']},
      
      {'company': 'Reynolds & Reynolds', 'title' : 'Software Support Specialist', 'location' : 'Kettering, OH' ,
        'description': ['Help customers who are experiencing issues with the software or have questions about how it functions.',
        'Train new hires or groups from other departments on the software they will be supporting',
        'Access Database maintenance and creation',], 
      'bulletPoints' : [
        'Document errors with the software and submit reports to development to either implement a change or correct flaws found',
        'In class style training that lasts a week (typically 2 – 6 people)',
        'I’ve created a front-end application with Access and a back-end Access database. This is used by all the departments under the Director of the Technical Assistance Center (TAC) that helps track employee time off and special projects. This amounts to 6 separate departments with a combined employee count of over 140.']},
    ]

    const technologiesFE = [
        {'technology': 'React.js', 'svg': Reactjs},
        {'technology': 'Material UI', 'svg': Material},
        {'technology': 'Bootstrap', 'svg': Bootstrap},
        {'technology': 'JavaScript', 'svg': Javascript},
        {'technology': 'CSS', 'svg': Css},
        {'technology': 'HTML', 'svg': Html},
        {'technology': 'Redux', 'svg': Redux},
    ]

    const technologiesBE = [
        {'technology': 'Java', 'svg': Java},
        {'technology': 'AWS: Cloudfront', 'svg': Cloudfront},
        {'technology': 'AWS: Route 53', 'svg': Route53},
        {'technology': 'AWS: S3', 'svg': S3},
        {'technology': 'Python', 'svg': Python},
        {'technology': 'Hibernate', 'svg': Hibernate},
        {'technology': 'MySQL', 'svg': Mysql},
        {'technology': 'Spring Boot', 'svg': Springio},
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
    listItemText:{
        fontSize:'0.1em',
      },
    title : {
        fontSize: 15,
    },
    titleMobile : {
        fontSize: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    tabs: {
        borderRight: `0px solid ${theme.palette.divider}`,
        marginTop: 60,
        marginBottom: 60,
        marginRight: 20,
        color: 'white',  
        fontSize: '14px',
    },
    tabsMobile: {
        borderRight: `0px solid ${theme.palette.divider}`,
        marginTop: 40,
        marginBottom: 40,
        marginRight: 27,
        color: 'white',  
        fontSize: '10px',
    },
    paperContainer: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '70vw',
        paddingBottom: '10px',
        paddingTop: '10px',
    },
    paperContainerLeft: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '20vw',
        overflow: 'auto',
    },
    paperContainerRight: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        width: '50vw',
        maxHeight: '23vh',
        overflow: 'auto',
    },
    paperContainerMobile: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        paddingBottom: '1px',
    },
    paperContainerLeftMobile: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        padding: '1px',
    },
    paperContainerRightMobile: {
        backgroundColor: '#FCF8D2',
        boxShadow: 'none',
        height: '23vh',
        overflow: 'auto',
        padding: '3px',
    },
    paperContainerContact: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        maxHeight: '80vh',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
    },
    devIconStyle: {
        height: "20px",
        margin: "auto",
    },
    devIconStyleMobile: {
        height: "15px",
        margin: "auto",
    },
    schoolIconStyle: {
        height: "200px",
        margin: "auto",
        opacity: 0.75,
    },
    schoolIconStyleMobile: {
        height: "95px",
        margin: "auto",
        opacity: 0.75,
    },
    card: {
        width: 450,
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
    educationFontMobile: {
        fontFamily: 'EB Garamond',
        fontSize: '12px',
        fontStyle: 'italic',
        fontWeight: 300,
        color: '#FCF8D2'
    },
    tabPosition: {
        position: 'absolute',
    },
    description: {
        fontSize: '13px',
    },
    descriptionMobile: {
        fontSize: '9px',
    },
    company: {
        fontSize: '14px',
    },
    companyMobile: {
        fontSize: '10px',
    }
  }));
  
 function VerticalTabs({screen}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
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
        {screen.screenWidth > 700 ? 
            <Tabs 
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                //   textColor="primary"
            >
                <Tab className={classes.tabs} label="Technologies" {...a11yProps(0)} />
                <Tab className={classes.tabs} label="Education" {...a11yProps(1)} />
                <Tab className={classes.tabs} label="Work Experience" {...a11yProps(2)}  />
                {/* <Tab className={classes.tabs} label="Contact Me" {...a11yProps(3)} /> */}

            </Tabs>
            :
            <Tabs 
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                //textColor="primary"
            >
                <Tab className={classes.tabsMobile} label="Technologies" {...a11yProps(0)} />
                <Tab className={classes.tabsMobile} label="Education" {...a11yProps(1)} />
                <Tab className={classes.tabsMobile} label="Work Experience" {...a11yProps(2)}  />
                {/* <Tab className={classes.tabsMobile} label="Contact Me" {...a11yProps(3)} /> */}
            </Tabs>
        }
        <Container maxWidth='lg' disableGutters>
            <TabPanel value={value} index={0} >
                {screen.screenWidth > 600 ?
                <Grid container direction="row" justify="center" spacing={10} >
                    <Grid item>
                        <Card className={classes.card} >
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Front End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesFE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <ListItemIcon >
                                                    <img src={tech.svg} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText primary={tech.technology} /> 
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Back End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesBE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <ListItemIcon >
                                                    <img src={tech.svg} alt="" className={classes.devIconStyle}></img>
                                                </ListItemIcon>
                                                <ListItemText  primary={tech.technology} /> 
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                :
                <Grid container direction="row" justify="center" spacing={5} >
                    <Grid item>
                        <Card >
                            <CardContent>
                                <Typography className={classes.titleMobile} color="textSecondary" gutterBottom>
                                    Front End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesFE.map((tech) =>
                                        <Grid item xs={6} >
                                            <ListItem  disableGutters={true}>
                                                <Typography className={classes.titleMobile}>
                                                    <ListItemText disableTypography={true} primary={tech.technology} /> 
                                                </Typography>
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card >
                            <CardContent>
                                <Typography className={classes.titleMobile} color="textSecondary" gutterBottom>
                                    Back End
                                </Typography>
                                <List dense={true}>
                                    <Grid container direction="row">
                                    {technologiesBE.map((tech) =>
                                        <Grid item xs={6}>
                                            <ListItem  disableGutters={true}>
                                                <Typography className={classes.titleMobile}>
                                                    <ListItemText disableTypography={true} primary={tech.technology} /> 
                                                </Typography>
                                            </ListItem>
                                        </Grid>
                                    )}
                                    </Grid>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                }
            </TabPanel>
            <TabPanel value={value} index={1}  >
                {screen.screenWidth > 600 ?
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
                :
                <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item>  
                        <Box container>
                            <img src={Wrightstate} alt="" className={classes.schoolIconStyleMobile}></img>                            
                        </Box>  
                    </Grid>
                    <Grid item >
                        <Box container mt={5}>                            
                            <Typography className={classes.educationFontMobile}>B.S.B - Management Information Systems</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFontMobile}>Graduated - December 2018</Typography>
                        </Box> 
                    </Grid>
                    <Grid item>
                        <Box container>                            
                            <Typography className={classes.educationFontMobile}>GPA - 3.81/4.00</Typography>
                        </Box> 
                    </Grid>
                </Grid>
                }
                
            </TabPanel >
            <TabPanel value={value} index={2} >
                {screen.screenWidth > 600 ?
                <Box > 
                    {work.map(job =>  
                        <Box pl={10} pb={3}> 
                            <Paper className={classes.paperContainer}> 
                                <Grid container direction='row'>
                                    <Paper className={classes.paperContainerLeft}>
                                        <Grid container justify='center' >
                                            <Typography className={classes.company} >{job.company}</Typography>
                                        </Grid>
                                    </Paper> 
                                    <Paper className={classes.paperContainerRight}>
                                        {job.description.map((desc, i) =>    
                                            <Typography className={classes.description} key={i}>
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
                </Box> 
                :
                <Box > 
                    {work.map(job =>  
                        <Box pb={1}> 
                            <Paper className={classes.paperContainerMobile}> 
                                <Grid container direction='row'>
                                    <Paper className={classes.paperContainerLeftMobile}>
                                        <Grid container justify='center' >
                                            <Typography className={classes.companyMobile} >{job.company}</Typography>
                                        </Grid>
                                    </Paper> 
                                    <Paper className={classes.paperContainerRightMobile}>
                                        {job.description.map((desc, i) =>    
                                            <Typography className={classes.descriptionMobile} key={i}>
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
                </Box> 
                }
                
            </TabPanel>
            {/* <TabPanel value={value} index={3} >
                {screen.screenWidth > 600 ? 
                    <Box pt={5}>
                        <ResumeContact /> 
                    </Box>
                    :
                    <Paper className={classes.paperContainerContact}>
                        <Box>
                            <ResumeContactMobile /> 
                        </Box> 
                    </Paper>
                }
            </TabPanel> */}
        </Container>
    </div>
    </MuiThemeProvider>
    );
  }

  function mapStateToProps(state) {
    return { screen: state.screenSizeReducer.screen }
  }

  export default connect(mapStateToProps)(VerticalTabs)