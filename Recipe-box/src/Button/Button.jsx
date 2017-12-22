import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  }
};

const Button = ({ labelText, className, bgColor, labelColor, icon, click, name }) => (
  <React.Fragment>
    <RaisedButton
      label={labelText}
      labelPosition="before"
      className={className}
      backgroundColor={bgColor}
      labelColor={labelColor || '#fff'}
      icon={icon}
      style={styles.button}
      onClick={click}
      dataname={name}
    />
  </React.Fragment>
);

export default Button;
