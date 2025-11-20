import * as React from 'react';

const UserFormFooter = (
    props: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>
) => {
    return (
        <div {...props} className={'flex flex-col gap-2 ' + props.className}>
            {props.children}
        </div>
    );
};

export default UserFormFooter;
