import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  }
};

const Button = ({ labelText, className, bgColor, labelColor, icon, click, name }) => (
  <div>
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
  </div>
);

export default Button;
