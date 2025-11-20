import { createContext } from 'react';
import type { UserFormUser } from 'src/types/UserFormUser.ts';

interface UserFormContextType {
    submitCallback: () => void;
    user: Partial<UserFormUser>;
    setUserAttribute: (key: keyof UserFormUser, value: string) => void;
    isLoading?: boolean;
    isError?: boolean;
    invalidFields: (keyof UserFormUser)[];
    setFieldInvalid: (key: keyof UserFormUser, invalid: boolean) => void;
    unreadyFields: (keyof UserFormUser)[];
    setFieldUnready: (key: keyof UserFormUser, unready: boolean) => void;
    isSubmittable?: boolean;
}

export const UserFormContext = createContext<UserFormContextType>({
    submitCallback: async () => alert('Not loaded yet'),
    setUserAttribute: () => alert('Not loaded yet'),
    setFieldInvalid: () => alert('Not loaded yet'),
    invalidFields: [],
    setFieldUnready: () => alert('Not loaded yet'),
    unreadyFields: [],
    isSubmittable: false,
    user: {},
});
