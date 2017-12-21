import React, { Component } from 'react';

class TextareaBlock extends Component {

  render() {
    const { name, id, value, maxLength, rows, onChange, onBlur} = this.props;
    return (
        <div>
          <label className="textarea__label" htmlFor={id}>{name}</label>
          <textarea id={id}
                    className="textarea"
                    name={name}
                    placeholder={`Enter your ${name}`}
                    maxLength={maxLength}
                    rows={rows}
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={value}
                    required />
        </div>
    );
  }
}

export default TextareaBlock;
