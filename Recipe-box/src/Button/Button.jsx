import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const Button = (props) => (
  <div>
    <RaisedButton
      label={props.labelText}
      labelPosition="before"
      backgroundColor={props.bgColor}
      labelColor={props.labelColor || '#fff'}
      icon={props.icon}
      style={styles.button}
      onClick={props.click}
    />
  </div>
);

export default Button;
