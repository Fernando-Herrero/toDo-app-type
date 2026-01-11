import { InputField } from "@/components/InputField";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export const FormField = () => {
    const auth = useContext(AuthContext);
    if (!auth) return null;

    const { user, isLoading, setError, error, updateUser } = auth;

    const handleInput = ({ target: { name, value } }) => {
        setError(null);
        updateUser({ [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!user.name.trim()) {
            setError("El nombre es obligatorio");
            return;
        }

        if (user.name.trim().length < 2) {
            setError("El nombre debe tener al menos 2 caracteres");
            return;
        }

        if (!user.email.trim()) {
            setError("El email es obligatorio");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            setError("Por favor ingresa un email válido");
            return;
        }

        console.log("Usuario autenticado:", user);
    };

    return (
        <form className="flex flex-col gap-2 w-full max-w-[80vw]" onSubmit={handleSubmit}>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
                    {error}
                </div>
            )}

            <InputField
                label="Nombre:"
                name="name"
                value={user.name}
                onChange={handleInput}
                placeholder="Escribe tu nombre"
            />
            <InputField
                label="Email:"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Escribe tu email"
            />

            <button
                type="submit"
                disabled={isLoading}
                className="bg-gray-800 dark:bg-gray-200 text-gray-100 dark:text-gray-800 rounded max-w-1/2 self-center py-1 px-4 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? "Cargando..." : "Entrar"}
            </button>
        </form>
    );
};
