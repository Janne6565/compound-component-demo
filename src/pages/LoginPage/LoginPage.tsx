import UserFormComponent from 'src/components/UserFormComponent/UserFormComponent.tsx';
import type { UserFormUser } from 'src/types/UserFormUser.ts';
import Link from 'src/components/Link/Link.tsx';

const LoginPage = () => {
    const loginCallback = async (user: Partial<UserFormUser>) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert(JSON.stringify(user));
    };

    return (
        <div
            className={
                'w-screen h-screen bg-gray-900 flex justify-center items-center'
            }
        >
            <UserFormComponent submitCallback={loginCallback}>
                <UserFormComponent.Header title={'Login'} />
                <UserFormComponent.Body>
                    <UserFormComponent.EmailInput />
                    <UserFormComponent.PasswordInput disableLengthCheck />
                </UserFormComponent.Body>
                <UserFormComponent.Footer>
                    <UserFormComponent.SubmitButton />
                    <Link to={'/register'}>Dont have an account yet?</Link>
                </UserFormComponent.Footer>
            </UserFormComponent>
        </div>
    );
};

export default LoginPage;
