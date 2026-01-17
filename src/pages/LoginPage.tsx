import { AvatarGrid } from "@/components/AvatarGrid";
import { DarkTheme } from "@/components/DarkTheme";
import { FormField } from "@/components/FormField";
import { LanguageSelector } from "@/translations/LanguageSelector";
import { useTranslate } from "@/translations/useTranslate";

export const LoginPage = () => {
    const { t } = useTranslate();
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-2 p-2 bg-main">
            <div className="flex items-center gap-2">
                <DarkTheme />
                <LanguageSelector />
            </div>

            <div className="text-center">
                <h1 className="title">{t("login.main_title")}</h1>
                <h2 className="title">{t("login.subtitle")}</h2>
            </div>

            <FormField />
            <AvatarGrid />
        </div>
    );
};
