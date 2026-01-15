import type { ReactNode } from "react";

export type DropDownProps = {
    open: boolean;
    onClose?: () => void;
    className?: string;
    children: ReactNode;
    size?: "sm" | "md";
    placement?: "top" | "bottom";
    align?: "left" | "center" | "right";
};
