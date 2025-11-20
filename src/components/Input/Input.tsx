import * as React from 'react';
import { type InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.Ref<HTMLInputElement>;
};

const Input = (props: InputProps) => {
    return (
        <input
            {...props}
            className={
                'border-blue-900 border-2 rounded-lg p-2 focus:outline-none focus:border-blue-800 ' +
                props.className
            }
        />
    );
};

export default Input;
