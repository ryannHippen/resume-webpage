import React, { Component } from 'react'
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig); 

class s3API extends Component{

    s3GetImage(imageName){
        return Storage.get(imageName)



        // Storage.get(image_name).then(data => {
        //     console.log(data)
        //     return data
        //   })
        //   .catch(err => {
        //     console.log('error fetching image', err)
        //   })
    }

    s3GetResume(){
        Storage.get('Ryann Hippen - Resume.pdf').then(data => {
            console.log(data)
            return data
          })
          .catch(err => {
            console.log('error downloading resume', err)
          })
    }

    saveFile = () => {  
        Storage.put(this.state.fileName, this.state.file).then(() => {
          console.log('successfully saved file!')
          this.setState({ uploadfileUrl: '', file: '', fileName: ''})
          
        })
        .catch(err => {
          console.log('error uploading file', err)
        })
      }

}

export default new s3API();