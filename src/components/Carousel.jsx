import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Cloudfront from '../icons/cloudfront.svg'
import Git from '../icons/git.svg'
import Python from '../icons/python.svg'
import { Grid, Box } from '@material-ui/core';
 
class ProjectCarousel extends Component {
    render() {
        return (
            <Grid container direction="row" alignItems="center">
                <Box mt={10} container>
            <Grid item>
                <Carousel 
                    axis='horizontal' 
                    showStatus={false} 
                    showThumbs={false} 
                    autoPlay={true}  
                    infiniteLoop={true} 
                    transitionTime={1000}
                    interval={3000}
                >
                    <div>
                        <img src={Cloudfront} width="1000" height="500" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={Git} width="1000" height="500"/>
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src={Python} width="1000" height="500" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>.
                </Grid>
                </Box>
            </Grid>
        );
    }
}

export default ProjectCarousel;