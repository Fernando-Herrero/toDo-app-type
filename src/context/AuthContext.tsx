import { local } from "@/helpers/storage";
import type { AuthContextType, AuthProviderprops, User } from "@/types/auth.types";
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderprops) => {
    const savedUser = local.get<User>("userToDo");
    const [user, setUser] = useState<User>(
        savedUser || { name: "", email: "", avatarUrl: null, familyRole: null, isActive: false }
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateUser = (updates: Partial<User>) => {
        const newUser = { ...user, ...updates };
        setUser(newUser);
        local.save("userToDo", newUser);
    };

    const contextValue: AuthContextType = useMemo(
        () => ({ user, updateUser, error, setError, isLoading, setIsLoading }),
        [user, error, isLoading]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
