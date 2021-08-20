import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';
import { Paper } from '@material-ui/core';
// import Amplify from 'aws-amplify';
// import ampconfig from './ampconfig';
import  *  as Colors from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme }  from "@material-ui/core/styles";
import createPalette from '@material-ui/core/styles/createPalette';
import { BrowserRouter as Router } from "react-router-dom";

// Amplify.configure(ampconfig); 

const muiTheme = createMuiTheme({
      primary: Colors.pink,
      '&:hover': {
        primary: Colors.blue,
      }
  });
  //palette: createPalette({  

class App extends Component {
  // state = { 
  //   uploadfileUrl: '', 
  //   file: '', 
  //   fileName: '', 
  //   downloadFileUrl: '',
  // }

  // handelChange = e => {
  //   const file = e.target.files[0]
  //   this.setState({
  //     uploadfileUrl: URL.createObjectURL(file),
  //     file,
  //     fileName: file.name
  //   })
  // }

  // componentDidMount(){
  //   Storage.get('vinyl.jpeg').then(data => {
  //     this.setState({downloadFileUrl: data})
  //   })
  //   .catch(err => {
  //     console.log('error fetching image')
  //   })
  // }

  // saveFile = () => {  
  //   Storage.put(this.state.fileName, this.state.file).then(() => {
  //     alert('successfully saved file!')
  //     this.setState({ uploadfileUrl: '', file: '', fileName: ''})
  //   })
  //   .catch(err => {
  //     alert('error uploading file', err)
  //   })
  // }

  render() {
    
    const styles = {
      paperContainer: {
          height: '100vh',
          width: '100vw',
          overflowX: 'hidden',
          overflowY: 'hidden',
          backgroundColor: '#FCF8D2'
      }
    };

    return (
      <Router>
        <div>
          <MuiThemeProvider theme={muiTheme}>
            <Paper style={styles.paperContainer}>
                <Routes  />
            </Paper>
          </MuiThemeProvider>        
        </div>
      </Router>
    );
  }
}

export default App;
