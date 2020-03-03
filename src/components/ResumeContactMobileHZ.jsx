import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, BottomNavigation, Grid, Button, TextField, 
    Tooltip, Box, Typography, Divider, Snackbar } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Amplify, { Storage } from 'aws-amplify';
import config from '../ampconfig';
import SaveIcon from '@material-ui/icons/Save';
import AwsDynamoApi from '../services/awsDynamo'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class ResumeContactMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
        textmask: '(  )    -    ',
        firstName: null,
        lastName: null,
        organization: null,
        positionAvailable: null,
        phoneNumber: null,
        emailAddress: null,
        message: null,
        emailValidated: true,
        ableToSendToDB: true,
        openSnackBar: false,
        openSnackBarEmailValidError: false,
        openSnackBarRequiredFieldsError: false,
    }
}

contactRequestInfo = (e) => {
  switch(e.target.id) {
      case 'firstName':
          this.setState({firstName: e.target.value});
          break;
      case 'lastName':
          this.setState({lastName: e.target.value});
          break;
      case 'organization':
          this.setState({organization: e.target.value});
          break;
      case 'positionAvailable':
          this.setState({positionAvailable: e.target.value});
          break;
      case 'emailAddress':
          this.setState({emailAddress: e.target.value});
          break;
      case 'message':
          this.setState({message: e.target.value});
          break;
      default:
          break;
  }
};

requiredFieldsCheck = (e) => {
  if((this.state.emailAddress !== null  && this.state.organization !== null && this.state.firstName !== null) && 
  this.state.emailAddress !== ''  && this.state.organization !== '' && this.state.firstName !== '') {
      this.setState({ ableToSendToDB: true })
  } else {
      this.setState({ ableToSendToDB: false })
  }
};

emailValidation = (e) => {
  this.requiredFieldsCheck()
  const email = e.target.value;
  if(email.includes('@') && email.includes('.com')){
  this.setState({ emailValidated: true })
  } else  {
    this.setState({ emailValidated: false, openSnackBarEmailValidError: true })
  } 
};

send = () => { 
  if(this.state.firstName !== null && this.state.organization !== null && this.state.emailAddress !== null && this.state.emailValidated === true){
      this.setState({ ableToSendToDB: true })
      const contactInfo = {'id': Date.now(),'firstName': this.state.firstName, 'lastName': this.state.lastName, 
      'organization': this.state.organization,
      'position' : this.state.positionAvailable, 'phone': this.state.phoneNumber, 
      'email': this.state.emailAddress, 'message': this.state.message}
      AwsDynamoApi.postRequest(contactInfo)
      this.setState({ 
        openSnackBar: true, 
        firstName: null,
        lastName: null,
        organization: null,
        positionAvailable: null,
        phoneNumber: null,
        emailAddress: null,
        message: null,
        emailValidated: true,
        ableToSendToDB: true,
        textmask: null,
    })

  } else if (this.state.firstName === null || this.state.organization === null || this.state.emailAddress === null){
      this.setState({ ableToSendToDB: false, openSnackBarRequiredFieldsError: true })
      console.log(this.state.emailValidated)
  } else if (this.state.emailAddress !== null && this.state.emailValidated === false){
    this.setState({ ableToSendToDB: false, openSnackBarEmailValidError: true })
    console.log(this.state.emailValidated)
}
};

navToGitHub = () => {  
    window.open("https://github.com/ryannHippen/resume-webpage", "_blank")
}  

navToLinkedIn = () => {  
    window.open("https://www.linkedin.com/in/ryann-hippen-078334167", "_blank")
}  

handleChange = name => e => {
  this.setState({
    [name]: e.target.value,
    phoneNumber: e.target.value,
  });
};

  render() {

    const styles = {
        paperContainer: {
            overflow: 'hidden',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            marginTop: -20,
        },
        bottomNavigationContainer: {
            backgroundColor: 'transparent', 
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: '15px',
            marginRight: '15px',
            width: 100,
            fontSize: 13,
        },
        singleLineTextField: {
            width: 212,
        },
        buttonContainer: {
            backgroundColor: 'transparent',
        },
        sendText: {
          fontSize: 12,
        },
        hiddenText: {
          fontSize: 10,
          
        },
        snackBarColor: {
            backgroundColor: '#FCF8D2',
            color: 'black',
            marginBottom: '10vh',
        },
        messageBox: {
            width: 312,
        }
      };

    const getResume = () => {  
        Storage.get('Ryann Hippen - Resume.pdf').then(data => {
            window.open(data, "_blank")
        })
        .catch(err => {
            console.log('error downloading resume')
        })
        // window.open('', "_blank")
    };  
    return (
        <Paper style={styles.paperContainer}>
            <Grid container direction="column" justify="center" alignItems="center" >
                {/* <Grid item hidden={this.state.emailValidated}>
                    <Box pt={1}>
                        <Typography style={styles.hiddenText} color="primary">Email is not correctly formatted or empty</Typography>
                    </Box>
                </Grid>
                <Grid item hidden={this.state.ableToSendToDB}>
                    <Box pt={1}>
                        <Typography style={styles.hiddenText} color="primary">Please fill out all required fields</Typography>
                    </Box>
                </Grid> */}
                <Grid item>
                    <TextField
                        required
                        id="firstName"
                        label="First Name"
                        defaultValue={this.state.firstName}
                        value={this.state.firstName}
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white'} }}
                        onChange= {this.contactRequestInfo}
                        onBlur={this.requiredFieldsCheck}
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        defaultValue=""
                        value={this.state.lastName}
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                        onChange= {this.contactRequestInfo}
                    />
                    <TextField
                        required
                        id="organization"
                        label="Organization"
                        defaultValue=""
                        value={this.state.organization}
                        style={styles.singleLineTextField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                        onChange= {this.contactRequestInfo}
                        onBlur={this.requiredFieldsCheck}
                    />      
                </Grid>
                <Grid item>
                    <TextField
                        id="phoneNumber"
                        label="Phone"
                        defaultValue=""
                        value={this.state.phoneNumber}
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{
                            inputComponent: TextMaskCustom,
                            value:this.state.textmask,
                            onChange: this.handleChange('textmask'),
                            style: { fontSize: 12, color: 'white' }
                        }}
                    />
                    <TextField
                        required
                        id="emailAddress"
                        label="Email"
                        defaultValue=""
                        value={this.state.emailAddress}
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                        onChange= {this.contactRequestInfo}
                        onBlur= {this.emailValidation}
                    />
                    <TextField
                        id="positionAvailable"
                        label="Position Available"
                        defaultValue=""
                        value={this.state.positionAvailable}
                        style={styles.singleLineTextField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                        onChange= {this.contactRequestInfo}
                    />
                </Grid>
                
                <Grid item>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        defaultValue=""
                        value={this.state.message}
                        style={styles.messageBox}
                        margin="normal"
                        variant="outlined"
                        size="small"
                        rowsMax={3}
                        rows={10}
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                        onChange= {this.contactRequestInfo}
                    />
                </Grid>
            </Grid>
            <Box pt={0} pb={0}>
                    <Grid container direction="column" justify="center" alignItems="center" >
                        <Box pb={2}>
                            <Button size="small" onClick={ () => { this.send() }}>
                                <Typography variant="outlined" color="primary" style={styles.sendText}>Send</Typography>
                            </Button>
                        </Box>
                        <Box width="80%">
                            <Grid container direction="column"  >
                                <Divider />
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            <Box pt={1}>
              <BottomNavigation style={styles.bottomNavigationContainer}>  
                  <Tooltip title="GitHub Repo for this Site">
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
            </Box>
            <Snackbar 
                onClose={() => this.setState({openSnackBar: false})} 
                open={this.state.openSnackBar} autoHideDuration={3000}
                >
                    <Alert  onClose={() => this.setState({openSnackBar: false})} style={styles.snackBarColor} severity="success">
                        Message Sent!
                    </Alert>
            </Snackbar>
            <Snackbar 
                onClose={() => this.setState({openSnackBarRequiredFieldsError: false})} 
                open={this.state.openSnackBarRequiredFieldsError} autoHideDuration={3000} 
                  >
                    <Alert  onClose={() => this.setState({openSnackBarRequiredFieldsError: false})} style={styles.snackBarColor} severity="warning">
                        Missing Required Fields
                    </Alert>
            </Snackbar>
            <Snackbar 
                onClose={() => this.setState({openSnackBarEmailValidError: false})} 
                open={this.state.openSnackBarEmailValidError} autoHideDuration={3000} 
                  >
                    <Alert  onClose={() => this.setState({openSnackBarEmailValidError: false})} style={styles.snackBarColor} severity="warning">
                        Valid Email Required
                    </Alert>
            </Snackbar>
        </Paper>
    );
  }
}

export default withStyles(styles)(ResumeContactMobile);