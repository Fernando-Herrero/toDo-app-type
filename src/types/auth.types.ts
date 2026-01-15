import type { ReactNode } from "react";

type FamilyRole = "father" | "mother" | "son" | "daughter" | "pet";

export type User = {
    name: string;
    email: string;
    avatarUrl: string | null;
    familyRole: FamilyRole | null;
    isActive: boolean;
};

export type AuthProviderprops = {
    children: ReactNode;
};

export type AuthContextType = {
    user: User;
    updateUser: (updates: Partial<User>) => void;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
};
