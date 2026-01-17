import { InputField } from "@/components/InputField";
import { LoadingDots } from "@/components/LoadingDots";
import { AuthContext } from "@/context/AuthContext";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, type ChangeEvent, type FormEvent } from "react";

export const FormField = () => {
    const auth = useContext(AuthContext);
    if (!auth) return null;
    const { user, isLoading, setIsLoading, setError, error, updateUser } = auth;
    const { t } = useTranslate();

    const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setError(null);
        updateUser({ [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!user.name.trim()) {
            setError(t("form.errors.name_required"));
            return;
        }

        if (user.name.trim().length < 2) {
            setError(t("form.errors.name_min"));
            return;
        }

        if (!user.email.trim()) {
            setError(t("form.errors.email_required"));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            setError(t("form.errors.email_invalid"));
            return;
        }

        if (!user.familyRole) {
            setError(t("form.errors.role_required"));
            return;
        }

        if (!user.avatarUrl) {
            setError(t("form.errors.avatar_required"));
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            user.isActive = true;
            console.log("Usuario autenticado:", user);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <form className="flex flex-col gap-2 w-full max-w-[80vw]" onSubmit={handleSubmit}>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
                    {error}
                </div>
            )}

            <InputField
                label={t("form.labels.name")}
                name="name"
                value={user.name}
                onChange={handleInput}
                placeholder={t("form.placeholders.name")}
            />
            <InputField
                label={t("form.labels.email")}
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder={t("form.placeholders.email")}
            />

            <label className="flex flex-col gap-1 text-gray-800 dark:text-gray-200">
                <span className="text-login">{t("form.labels.role")}</span>
                <select
                    name="familyRole"
                    id="familyRole"
                    defaultValue=""
                    value={user.familyRole ?? ""}
                    onChange={handleInput}
                    className="border border-gray-600 rounded p-1 [&:has(option[value='']:checked)]:text-gray-600"
                >
                    <option value="" disabled>
                        {t("form.select_options.placeholder")}
                    </option>
                    <option value="father">{t("form.select_father")}</option>
                    <option value="mother">{t("form.select_options.mother")}</option>
                    <option value="son">{t("form.select_options.son")}</option>
                    <option value="daughter">{t("form.select_options.daughter")}</option>
                    <option value="pet">{t("form.select_options.pet")}</option>
                </select>
            </label>

            <button
                type="submit"
                disabled={isLoading}
                className="bg-gray-800 dark:bg-gray-200 text-gray-100 dark:text-gray-800 rounded max-w-1/2 self-center py-1 px-4 cursor-pointer transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        {t("form.button.loading")} <LoadingDots />
                    </>
                ) : (
                    t("form.button.submit")
                )}
            </button>
        </form>
    );
};
