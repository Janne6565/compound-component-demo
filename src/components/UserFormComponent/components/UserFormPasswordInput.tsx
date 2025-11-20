import { useContext, useEffect } from 'react';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import InputWithLabel from 'src/components/InputWithLabel/InputWithLabel.tsx';

const UserFormPasswordInput = (props: { disableLengthCheck?: boolean }) => {
    const {
        setUserAttribute,
        user,
        submitCallback,
        setFieldInvalid,
        setFieldUnready,
    } = useContext(UserFormContext);

    const isPasswordInvalid = user.password && user.password.length < 8;

    useEffect(() => {
        if (!user.password) {
            setFieldUnready('password', true);
        } else {
            setFieldUnready('password', false);
        }
    }, [setFieldUnready, user.password]);

    useEffect(() => {
        if (props.disableLengthCheck) {
            return;
        }
        if (isPasswordInvalid) {
            setFieldInvalid('password', true);
        } else {
            setFieldInvalid('password', false);
        }
    }, [setFieldInvalid, isPasswordInvalid, props.disableLengthCheck]);

    return (
        <InputWithLabel
            label={'Password'}
            type="password"
            defaultValue={user.password}
            error={
                isPasswordInvalid && !props.disableLengthCheck
                    ? 'Password must be at least 8 characters long'
                    : undefined
            }
            placeholder="Please enter your password"
            onChange={(e) => setUserAttribute('password', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitCallback()}
        />
    );
};

export default UserFormPasswordInput;
