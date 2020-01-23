import React, { Component } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';


class Home extends Component{

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render(){
        const styles = {
            paperContainer: {
                minHeight: '92vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }
          };

        return (
            <div>
                <Paper style={styles.paperContainer}>
                    <Grid container direction="row" justify="center" alignItems="center"     >
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center"></Typography>
                        </Grid>
                        <Grid item  xs={12} sm={6}>
                            <Typography align="center">Technologies Listed</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}


export default Home;