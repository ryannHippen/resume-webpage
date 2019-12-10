import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem } from '@material-ui/core'
import { withRouter } from 'react-router-dom';
import { logOut } from '../redux/actions/UserActions';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bgcolor: {
      background: 'black',
      height: 55
  }
}));

function NavBar(props) {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = event => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

const ITEM_HEIGHT = 48;

const logout =() => {
    props.logOut('undefined')
    props.history.push(`/login`)
    ;
    
}

const selected =(option) => {
    if(option === 'Search Games'){
       props.history.push(`/games`);
    } else if(option === 'Home Page') {
        props.history.push(`/home`);
    } else {
        props.history.push(`/user/profile`);
    }
    handleClose();
}


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgcolor}>
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="more" 
            aria-controls="simple-menu" 
            onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
          <MenuItem onClick={ ()=> selected('Home Page')}>Home Page</MenuItem>
          <MenuItem onClick={ ()=> selected('Search Games')}>Search Games</MenuItem>
          <MenuItem onClick={ ()=> selected('Profile')}>Profile</MenuItem>
      </Menu>
          <Typography variant="h6" className={classes.title}>
            <span className="victory-not-slanted">Menu</span>
          </Typography >
          <Button size="small" color="inherit" onClick={ ()=> logout()}>
              <span className="victory-not-slanted"><h6>Logout</h6></span></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: (user) => {
            dispatch(logOut(user));
        }
    }
}


export default withRouter(connect(null, mapDispatchToProps)(NavBar))