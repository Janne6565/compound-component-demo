import { useContext, useEffect } from 'react';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import InputWithLabel from 'src/components/InputWithLabel/InputWithLabel.tsx';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UserFormEmailInput = () => {
    const {
        setUserAttribute,
        user,
        submitCallback,
        setFieldInvalid,
        setFieldUnready,
    } = useContext(UserFormContext);

    const isEmailInvalid = user.email && !emailRegex.test(user.email);

    useEffect(() => {
        if (!user.email) {
            setFieldUnready('email', true);
        } else {
            setFieldUnready('email', false);
        }
    }, [setFieldUnready, user.email]);

    useEffect(() => {
        if (isEmailInvalid) {
            setFieldInvalid('email', true);
        } else {
            setFieldInvalid('email', false);
        }
    }, [setFieldInvalid, isEmailInvalid]);

    return (
        <InputWithLabel
            label={'Email'}
            type="email"
            defaultValue={user.email}
            placeholder="demo@example.org"
            error={
                isEmailInvalid
                    ? 'Please enter a valid email address'
                    : undefined
            }
            onChange={(e) => setUserAttribute('email', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitCallback()}
        />
    );
};

export default UserFormEmailInput;
