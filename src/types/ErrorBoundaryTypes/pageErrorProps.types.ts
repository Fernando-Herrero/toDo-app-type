import type { MouseEventHandler, ReactNode } from "react";

export type PageErrorProps = {
    title?: string;
    message?: string;
    icon?: ReactNode;
    onRetry?: MouseEventHandler<HTMLButtonElement>;
    retryText?: string;
    noCenter?: boolean;
    className?: string;
    containerClassName?: string;
    fullPage?: boolean;
};
