import { useContext, useEffect } from 'react';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import InputWithLabel from 'src/components/InputWithLabel/InputWithLabel.tsx';

const UserFormPasswordRepeatInput = () => {
    const {
        setUserAttribute,
        user,
        submitCallback,
        setFieldInvalid,
        setFieldUnready,
    } = useContext(UserFormContext);

    useEffect(() => {
        if (!user.password) {
            setFieldUnready('repeatedPassword', true);
        } else {
            setFieldUnready('repeatedPassword', false);
        }
    }, [setFieldUnready, user.password]);

    useEffect(() => {
        if (user.password != user.repeatedPassword) {
            setFieldInvalid('repeatedPassword', true);
        } else {
            setFieldInvalid('repeatedPassword', false);
        }
    }, [user.password, setFieldInvalid, user.repeatedPassword]);

    return (
        <InputWithLabel
            label={'Repeat Password'}
            type="password"
            defaultValue={user.repeatedPassword}
            placeholder="Please enter your password"
            error={
                user.password != user.repeatedPassword
                    ? 'Passwords do not match'
                    : undefined
            }
            onChange={(e) =>
                setUserAttribute('repeatedPassword', e.target.value)
            }
            onKeyDown={(e) => e.key === 'Enter' && submitCallback()}
        />
    );
};

export default UserFormPasswordRepeatInput;
