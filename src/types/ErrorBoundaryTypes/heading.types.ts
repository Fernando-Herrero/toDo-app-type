import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingSize =
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";

export type HeadingWeight =
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";

export type HeadingColor =
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

export type HeadingVariant = "default" | "display" | "subtitle" | "eyebrow";

export type HeadingAlign = "left" | "center" | "right" | "justify";

export type HeadingProps = {
    children: ReactNode;
    level?: HeadingLevel;
    size?: HeadingSize;
    weight?: HeadingWeight;
    color?: HeadingColor;
    variant?: HeadingVariant;
    align?: HeadingAlign;
    truncate?: boolean;
    className?: string;
    as?: ElementType;
    id?: string;
} & HTMLAttributes<HTMLElement>;
