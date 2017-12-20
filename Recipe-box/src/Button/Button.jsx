import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  }
};

const Button = ({ labelText, bgColor, labelColor, icon, click, name }) => (
  <div>
    <RaisedButton
      label={labelText}
      labelPosition="before"
      backgroundColor={bgColor}
      labelColor={labelColor || '#fff'}
      icon={icon}
      style={styles.button}
      onClick={click}
      dataname={name}
    />
  </div>
);

export default Button;
