import { type ReactNode } from 'react';
import type { UserFormUser } from 'src/types/UserFormUser.ts';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';
import UserFormEmailInput from 'src/components/UserFormComponent/components/UserFormEmailInput.tsx';
import UserFormHeader from 'src/components/UserFormComponent/components/UserFormHeader.tsx';
import UserFormPasswordInput from 'src/components/UserFormComponent/components/UserFormPasswordInput.tsx';
import UserFormFormBody from 'src/components/UserFormComponent/components/UserFormFormBody.tsx';
import UserFormSubmitButton from 'src/components/UserFormComponent/components/UserFormSubmitButton.tsx';
import UserFormFooter from 'src/components/UserFormComponent/components/UserFormFooter.tsx';
import UserFormPasswordRepeatInput from 'src/components/UserFormComponent/components/UserFormPasswordRepeatInput.tsx';
import UserFormDateOfBirthInput from 'src/components/UserFormComponent/components/UserFormDateOfBirthInput.tsx';
import useUserFormComponent from 'src/components/UserFormComponent/UserFormComponent.hooks.tsx';

interface LoginComponentProps {
    submitCallback?: (user: Partial<UserFormUser>) => Promise<void> | void;
    children: ReactNode;
}

const UserFormComponent = (props: LoginComponentProps) => {
    const {
        user,
        invalidFields,
        setFieldInvalid,
        setFieldUnready,
        isSubmittable,
        isError,
        setUserAttribute,
        unreadyFields,
        validatedSubmitCallback,
        isPending,
    } = useUserFormComponent(props.submitCallback);

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
