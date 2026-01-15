import { DropDown } from "@/components/Dropdown";
import { local } from "@/helpers/storage";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToggle } from "@/hooks/useToggle";
import type { Language, LanguageSelectorProps } from "@/types/languageSelector.types";
import { useTranslation } from "react-i18next";

export const LanguageSelector = ({ placement, align }: LanguageSelectorProps) => {
    const { i18n } = useTranslation();
    const languages = Object.keys(i18n.options.resources!) as Language[];
    const currentLanguage = i18n.language as Language;
    // const languages: Language[] = ["es" | "en"]
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const menuRef = useClickOutside<HTMLDivElement>(toggleMenu, isOpen);

    const languagesMap: Record<Language, { flag: string; label: string }> = {
        es: { flag: "🇪🇸", label: "Español" },
        en: { flag: "🇬🇧", label: "English" },
    };

    const handleLanguage = (language: Language) => {
        i18n.changeLanguage(language);
        local.save("lang", language);
        toggleMenu();
    };

    return (
        <div className="relative" ref={menuRef}>
            <button type="button" onClick={toggleMenu} className="mobile-ui-controls">
                <span>{languagesMap[currentLanguage].flag}</span>
                <span className="hidden text-gradient md:block">{languagesMap[currentLanguage].label}</span>
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" placement={placement} align={align}>
                <div className="flex flex-col">
                    {languages.map((language) => (
                        <button
                            key={language}
                            onClick={() => handleLanguage(language)}
                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-orangeAce/10 rounded-md cursor-pointer"
                        >
                            <span>{languagesMap?.[language].flag}</span>
                            <span className="text-gradient">{languagesMap[language]?.label || "Idioma"}</span>
                        </button>
                    ))}
                </div>
            </DropDown>
        </div>
    );
};
