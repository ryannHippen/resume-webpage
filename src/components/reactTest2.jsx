import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Input extends React.PureComponent {
    render() {
      let {forwardedRef, ...otherProps} = this.props; 
      return <input {...otherProps} ref={forwardedRef} />;
    }
  }
  
  const TextInput = React.forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />
  });
  
  class FocusableInput extends React.Component {
    
    ref = React.createRef()
  
    render() {
      return <TextInput ref={this.ref} />;
    }
  
    // When the focused prop is changed from false to true, 
    // and the input is not focused, it should receive focus.
    // If focused prop is true, the input should receive the focus.
    // Implement your solution below:
    componentDidUpdate(prevProps) {console.log(prevProps)}
    
    componentDidMount() {}
  }
  
  FocusableInput.defaultProps = {
    focused: false
  };
  
  const App = (props) => <FocusableInput focused={props.focused} />;
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);

  export default Input