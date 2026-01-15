import type { ComponentType, MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "default" | "primary" | "secondary" | "outline" | "ghost" | "danger";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export type ButtonType = "button" | "submit" | "reset";

export type ButtonVariantConfig = {
    classes: string;
    hasHoverEffects: boolean;
    shadowColor: string | null;
};

export type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
    type?: ButtonType;
    as?: ComponentType<any>;
    to?: string;
    className?: string;
} & React.HTMLAttributes<HTMLElement>;
