import UserFormComponent from 'src/components/UserFormComponent/UserFormComponent.tsx';
import type { UserFormUser } from 'src/types/UserFormUser.ts';
import Link from 'src/components/Link/Link.tsx';

const RegisterPage = () => {
    const registerCallback = async (user: Partial<UserFormUser>) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(JSON.stringify(user));
    };

    return (
        <div
            className={
                'w-screen h-screen bg-gray-900 flex justify-center items-center'
            }
        >
            <UserFormComponent submitCallback={registerCallback}>
                <UserFormComponent.Header title={'Register'} />
                <UserFormComponent.Body>
                    <UserFormComponent.EmailInput />
                    <UserFormComponent.BirthdateInput />
                    <UserFormComponent.PasswordInput />
                    <UserFormComponent.PasswordRepeatInput />
                </UserFormComponent.Body>
                <UserFormComponent.Footer>
                    <UserFormComponent.SubmitButton />
                    <Link to={'/'}>Already have a account?</Link>
                </UserFormComponent.Footer>
            </UserFormComponent>
        </div>
    );
};

export default RegisterPage;
