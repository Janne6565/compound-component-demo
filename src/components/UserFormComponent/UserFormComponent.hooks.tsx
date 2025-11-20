import { useState } from 'react';
import type { UserFormUser } from 'src/types/UserFormUser.ts';
import { useMutation } from '@tanstack/react-query';

const useUserFormComponent = (
    submitCallbackProp?: (user: Partial<UserFormUser>) => Promise<void> | void
) => {
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
        if (submitCallbackProp) {
            await submitCallbackProp(user);
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

    return {
        user,
        setUser,
        invalidFields,
        setFieldInvalid,
        setFieldUnready,
        submitCallback,
        isSubmittable,
        isError,
        setUserAttribute,
        unreadyFields,
        validatedSubmitCallback,
        isPending,
    };
};

export default useUserFormComponent;
