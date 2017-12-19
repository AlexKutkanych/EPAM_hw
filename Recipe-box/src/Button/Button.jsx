import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  }
};

const Button = ({ labelText, bgColor, labelColor, icon, click }) => (
  <div>
    <RaisedButton
      label={labelText}
      labelPosition="before"
      backgroundColor={bgColor}
      labelColor={labelColor || '#fff'}
      icon={icon}
      style={styles.button}
      onClick={click}
    />
  </div>
);

export default Button;
