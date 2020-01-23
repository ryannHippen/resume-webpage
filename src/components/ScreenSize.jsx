import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import updateScreenSize from '../actions/screenSizeActions'

   function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

function ShowWindowDimensions(props) {  
    const [width, height] = useWindowSize();
    props.update({screenWidth: width, screenHeight: height})
    return <span>Window size: {width} x {height}</span>;
  }

  const mapDispatchToProps = dispatch => {
    
    return {
    update: size => dispatch(updateScreenSize(size))
  }}; 
  
  export default connect(null,mapDispatchToProps)(ShowWindowDimensions);
  