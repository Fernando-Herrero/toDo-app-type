import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type TextWeight = "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
export type TextColor =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "muted"
    | "white"
    | "black";
export type TextVariant = "body" | "caption" | "label" | "code" | "kbd" | "muted" | "small" | "lead";
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize";
export type TextDecoration = "none" | "underline" | "overline" | "line-through";
export type TextLeading = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";

export type TextProps = {
    children: ReactNode;
    size?: string;
    weight?: TextWeight;
    color?: TextColor;
    variant?: TextVariant;
    align?: TextAlign;
    transform?: TextTransform;
    decoration?: TextDecoration;
    truncate?: boolean;
    leading?: TextLeading;
    className?: string;
    as?: ElementType;
    id?: string;
} & HTMLAttributes<HTMLElement>;
