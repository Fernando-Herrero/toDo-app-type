import { local } from "@/helpers/storage";
import type { AuthContextType, User } from "@/types/todo.types";
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
    const savedUser = local.get("user");
    const [user, setUser] = useState<User>(savedUser || { name: "", email: "", avatar: null });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const updateUser = (updates: Partial<User>) => {
        const newUser = { ...user, ...updates };
        setUser(newUser);
        local.save("user", newUser);
    };

    const contextValue: AuthContextType = useMemo(
        () => ({ user, updateUser, error, setError, isLoading, setIsLoading }),
        [user, error, isLoading]
    );

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
