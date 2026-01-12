import type { ChangeEvent } from "react";

export type User = {
    name: string;
    email: string;
    avatar: string | null;
};

export type AuthContextType = {
    user: User;
    updateUser: (updates: Partial<User>) => void;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export type InputFieldProps = {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};
