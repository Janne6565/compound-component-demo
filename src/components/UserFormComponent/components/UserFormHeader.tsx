import * as React from 'react';

const UserFormHeader = (
    props: {
        title?: string | React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement>
) => (
    <h1
        {...props}
        className={
            'w-full text-left text-3xl text-white ' + (props.className ?? '')
        }
    >
        {props.title ?? 'User Form'}
    </h1>
);

export default UserFormHeader;
