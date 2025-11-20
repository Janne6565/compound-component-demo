import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = (
    props: DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
) => {
    return (
        <button
            {...props}
            className={
                'bg-blue-900 hover:bg-blue-800 transition-colors text-white font-bold py-2 px-4 rounded disabled:bg-blue-950/50 cursor-pointer ' +
                props.className
            }
        >
            {props.children}
        </button>
    );
};

export default Button;
