import React from 'react';

const AppInput = ({input , label, type, meta: {touched, error, warning }}) => {
    return (
        <div>
            <label>
                {label}
                <input {...input} placeholder={label} type={type} />
                {touched && ((error && <div>{error}</div>) || (warning && <span>{warning}</span>))}
            </label>
        </div>
    )
}

export default AppInput;