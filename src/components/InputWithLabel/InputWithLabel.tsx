import Input, { type InputProps } from 'src/components/Input/Input.tsx';
import { useRef } from 'react';

export interface InputWithLabelProps extends InputProps {
    label: string;
    error?: string | React.ReactNode;
}

const InputWithLabel = (props: InputWithLabelProps) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className={'flex flex-col gap-1'}>
            <label
                className="block font-medium text-gray-400 cursor-pointer select-none"
                onClick={() => ref.current?.focus()}
            >
                {props.label}
            </label>
            <Input {...props} ref={ref} />
            <span
                className={
                    'text-red-500/40 text-sm opacity-' +
                    (props.error ? '100' : '0')
                }
            >
                {props.error ? <>({props.error})</> : 'error'}
            </span>
        </div>
    );
};

export default InputWithLabel;
