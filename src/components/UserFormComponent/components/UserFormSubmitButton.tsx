import Button from 'src/components/Button/Button.tsx';
import { useContext } from 'react';
import { UserFormContext } from 'src/components/UserFormComponent/UserFormContext.ts';

const UserFormSubmitButton = (props: { title?: string | React.ReactNode }) => {
    const { submitCallback, isLoading, isError, isSubmittable } =
        useContext(UserFormContext);

    return (
        <>
            <Button
                onClick={() => submitCallback()}
                disabled={isLoading || !isSubmittable}
            >
                {isLoading ? 'Loading...' : (props.title ?? 'Submit')}
            </Button>
            {isError && <p className={'text-red-500'}>Error occurred</p>}
        </>
    );
};

export default UserFormSubmitButton;
