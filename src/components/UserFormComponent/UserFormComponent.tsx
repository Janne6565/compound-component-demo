import { type ReactNode, useState } from 'react';
import type { UserFormUser } from 'src/types/UserFormUser.ts';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import UserFormEmailInput from 'src/components/UserFormComponent/components/UserFormEmailInput.tsx';
import UserFormHeader from 'src/components/UserFormComponent/components/UserFormHeader.tsx';
import UserFormPasswordInput from 'src/components/UserFormComponent/components/UserFormPasswordInput.tsx';
import UserFormFormBody from 'src/components/UserFormComponent/components/UserFormFormBody.tsx';
import UserFormSubmitButton from 'src/components/UserFormComponent/components/UserFormSubmitButton.tsx';
import { useMutation } from '@tanstack/react-query';
import UserFormFooter from 'src/components/UserFormComponent/components/UserFormFooter.tsx';
import UserFormPasswordRepeatInput from 'src/components/UserFormComponent/components/UserFormPasswordRepeatInput.tsx';
import UserFormDateOfBirthInput from 'src/components/UserFormComponent/components/UserFormDateOfBirthInput.tsx';

interface LoginComponentProps {
    submitCallback?: (user: Partial<UserFormUser>) => Promise<void> | void;
    children: ReactNode;
}

const UserFormComponent = (props: LoginComponentProps) => {
    const [user, setUser] = useState<Partial<UserFormUser>>({});
    const [invalidFields, setInvalidFields] = useState<(keyof UserFormUser)[]>(
        []
    );
    const [unreadyFields, setUnreadyFields] = useState<(keyof UserFormUser)[]>(
        []
    );
    const isSubmittable = !unreadyFields.length && !invalidFields.length;

    const setUserAttribute = (key: keyof UserFormUser, value: string) => {
        setUser({ ...user, [key]: value });
    };

    const submitCallback = async () => {
        if (!isSubmittable) {
            return;
        }
        if (props.submitCallback) {
            await props.submitCallback(user);
        }
    };

    const { mutate, isPending, isError } = useMutation({
        mutationFn: submitCallback,
    });
    const validatedSubmitCallback = () => (!isPending ? mutate() : undefined);

    const setFieldInvalid = (field: keyof UserFormUser, isInvalid: boolean) => {
        setInvalidFields((prev) => {
            if (isInvalid) {
                return [...prev, field];
            } else {
                return prev.filter((f) => f !== field);
            }
        });
    };

    const setFieldUnready = (field: keyof UserFormUser, isUnready: boolean) => {
        setUnreadyFields((prev) => {
            if (isUnready) {
                return [...prev, field];
            } else {
                return prev.filter((f) => f !== field);
            }
        });
    };

    return (
        <div
            className={
                'w-100 flex flex-col justify-start bg-gray-800 gap-5 rounded-xl text-white py-5 pb-8 px-6'
            }
        >
            <UserFormContext.Provider
                value={{
                    submitCallback: () => validatedSubmitCallback(),
                    setUserAttribute: setUserAttribute,
                    user: user,
                    isLoading: isPending,
                    isError: isError,
                    invalidFields: invalidFields,
                    setFieldInvalid,
                    setFieldUnready,
                    isSubmittable,
                    unreadyFields,
                }}
            >
                {props.children}
            </UserFormContext.Provider>
        </div>
    );
};

UserFormComponent.EmailInput = UserFormEmailInput;
UserFormComponent.Header = UserFormHeader;
UserFormComponent.PasswordInput = UserFormPasswordInput;
UserFormComponent.PasswordRepeatInput = UserFormPasswordRepeatInput;
UserFormComponent.BirthdateInput = UserFormDateOfBirthInput;
UserFormComponent.Body = UserFormFormBody;
UserFormComponent.SubmitButton = UserFormSubmitButton;
UserFormComponent.Footer = UserFormFooter;
export default UserFormComponent;
