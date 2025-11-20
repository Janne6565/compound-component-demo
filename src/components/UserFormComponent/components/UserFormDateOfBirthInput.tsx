import { useContext, useEffect } from 'react';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import InputWithLabel from 'src/components/InputWithLabel/InputWithLabel.tsx';
import dayjs from 'dayjs';

const UserFormDateOfBirthInput = () => {
    const {
        setUserAttribute,
        user,
        submitCallback,
        setFieldInvalid,
        setFieldUnready,
    } = useContext(UserFormContext);

    const isBirthDateInvalid =
        user.dateOfBirth &&
        dayjs(user.dateOfBirth).isAfter(dayjs().subtract(18, 'years'));

    useEffect(() => {
        if (!user.dateOfBirth) {
            setFieldUnready('dateOfBirth', true);
        } else {
            setFieldUnready('dateOfBirth', false);
        }
    }, [setFieldUnready, user.dateOfBirth]);

    useEffect(() => {
        if (isBirthDateInvalid) {
            setFieldInvalid('dateOfBirth', true);
        } else {
            setFieldInvalid('dateOfBirth', false);
        }
    }, [setFieldInvalid, isBirthDateInvalid]);

    return (
        <InputWithLabel
            label={'Birthdate'}
            type="date"
            defaultValue={user.email}
            error={
                isBirthDateInvalid
                    ? 'You must be at least 18 years old to register'
                    : undefined
            }
            onChange={(e) => setUserAttribute('dateOfBirth', e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitCallback()}
        />
    );
};

export default UserFormDateOfBirthInput;
