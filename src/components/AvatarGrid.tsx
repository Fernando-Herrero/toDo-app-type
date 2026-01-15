import { AuthContext } from "@/context/AuthContext";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";
import bart from "/bart.webp";
import homer from "/homer.webp";
import lisa from "/lisa.webp";
import maggie from "/maggie.webp";
import marge from "/marge.webp";
import perro from "/perro.webp";

const avatars = [
    { name: "homer", src: homer },
    { name: "marge", src: marge },
    { name: "bart", src: bart },
    { name: "lisa", src: lisa },
    { name: "maggie", src: maggie },
    { name: "perro", src: perro },
];

export const AvatarGrid = () => {
    const auth = useContext(AuthContext);
    if (!auth) return null;
    const { user, updateUser } = auth;
    const { t } = useTranslate();

    return (
        <section className="flex flex-col gap-1 text-center">
            <p className="text-login">{t("avatar_image.title")}</p>

            <div className="grid grid-cols-3 justify-items-center gap-1">
                {avatars.map(({ name, src }) => (
                    <button
                        key={name}
                        type="button"
                        aria-label={`Elegir avatar de ${name}`}
                        aria-pressed={user.avatarUrl === name}
                        onClick={() => updateUser({ avatarUrl: name })}
                        className={`p-1 rounded-full transition-all duration-150 active:scale-95 focus:outline-none ${
                            user.avatarUrl === name ? "rotating-border" : ""
                        }`}
                    >
                        {user.avatarUrl === name && (
                            <svg viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="gradient-base" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ff49c9" />
                                        <stop offset="100%" stopColor="#ff77e3" />
                                    </linearGradient>
                                    <linearGradient id="gradient-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    className="arc-base"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    pathLength="251"
                                    strokeDasharray="80 171"
                                />
                                <circle className="arc-shine" cx="50" cy="50" r="40" pathLength="251" />
                            </svg>
                        )}
                        <div className="avatar-container">
                            <img
                                src={src}
                                alt={`${name} avatar`}
                                className="absolute w-[90%] h-[90%] object-contain object-center"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};
