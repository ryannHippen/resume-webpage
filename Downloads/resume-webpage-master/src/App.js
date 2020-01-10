import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';
import NavBar from './components/NavBar';
import BottomNavBar from './components/BottomNavBar';
import { Paper } from '@material-ui/core';
import Amplify, { Storage } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
// import awsconfig from './aws-exports';
import ampconfig from './ampconfig';

// Amplify.configure(awsconfig); 
Amplify.configure(ampconfig); 

class App extends Component {
  state = { 
    uploadfileUrl: '', 
    file: '', 
    fileName: '', 
    downloadFileUrl: '',
  }

  handelChange = e => {
    const file = e.target.files[0]
    this.setState({
      uploadfileUrl: URL.createObjectURL(file),
      file,
      fileName: file.name
    })
  }

  componentDidMount(){
    Storage.get('vinyl.jpeg').then(data => {
      this.setState({downloadFileUrl: data})
    })
    .catch(err => {
      console.log('error fetching image')
    })
  }

  saveFile = () => {  
    Storage.put(this.state.fileName, this.state.file).then(() => {
      alert('successfully saved file!')
      this.setState({ uploadfileUrl: '', file: '', fileName: ''})
      
    })
    .catch(err => {
      alert('error uploading file', err)
    })
  }

  render() {
    

    const styles = {
      paperContainer: {
          backgroundImage: `url(${this.state.downloadFileUrl})`,
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            overflowX: 'hidden',
      }
    };

    return (
      <div>
         <Paper style={styles.paperContainer}>
            {/* <input type='file' onChange= {this.handelChange} />
            <button onClick={this.saveFile}> Save File</button> */}
            <Routes  />
        </Paper>
        
      </div>
    );
  }
}


export default App;
