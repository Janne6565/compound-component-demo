import {
    Link as RouterLink,
    type LinkProps as RouterLinkProps,
} from 'react-router';
import * as React from 'react';

type ExtendedProps = RouterLinkProps & React.RefAttributes<HTMLAnchorElement>;

interface LinkProps extends ExtendedProps {
    children: React.ReactNode;
}

const Link = (props: LinkProps) => {
    return (
        <RouterLink
            {...props}
            className={
                'text-blue-500 hover:underline ' + (props.className ?? '')
            }
        >
            {props.children}
        </RouterLink>
    );
};

export default Link;
