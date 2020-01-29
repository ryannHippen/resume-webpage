import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, BottomNavigation, Grid, Button, TextField, Tooltip, Box, Typography, Divider } from '@material-ui/core';
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
  state = {
    textmask: '(  )    -    ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

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
            marginLeft: '3px',
            marginRight: '3px',
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
        }
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
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Last Name"
                        defaultValue=""
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
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
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-name"
                        label="Position Available"
                        defaultValue=""
                        style={styles.singleLineTextField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-name"
                        label="Phone"
                        defaultValue=""
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
                        id="standard-name"
                        label="Email"
                        defaultValue=""
                        style={styles.textField}
                        margin="normal"
                        size="small"
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
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
                        size="small"
                        rowsMax={5}
                        rows={10}
                        InputLabelProps={{ style: { fontSize: 13 } }}
                        InputProps={{ style: { fontSize: 12, color: 'white' } }}
                    />
                </Grid>
            </Grid>
            <Box pt={3} pb={5}>
                    <Grid container direction="column" justify="center" alignItems="center" >
                        <Box pb={2}>
                            <Button size="small">
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
            </Box>
        </Paper>
    );
  }
}

export default withStyles(styles)(ResumeContactMobile);