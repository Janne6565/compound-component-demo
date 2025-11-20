import * as React from 'react';

const UserFormFormBody = (
    props: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>
) => {
    return (
        <div
            {...props}
            className={
                'flex flex-1 flex-col gap-2 grow justify-start py-4 pb-2 ' +
                (props.className ?? '')
            }
        >
            {props.children}
        </div>
    );
};

export default UserFormFormBody;
