import React from 'react';

const TextareaBlock = ({ name, id, value, datarecipename, maxLength, rows, onChange, onBlur}) => (
    <React.Fragment>
      <label className="textarea__label" htmlFor={id}>{name}</label>
      <textarea id={id}
                className="textarea"
                name={name}
                datarecipename={datarecipename}
                placeholder={`Enter your ${name}`}
                maxLength={maxLength}
                rows={rows}
                onChange={onChange}
                onBlur={onBlur}
                defaultValue={value}
                required />
    </React.Fragment>
)

export default TextareaBlock;
