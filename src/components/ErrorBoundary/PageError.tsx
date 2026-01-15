import { Button } from "@/components/ErrorBoundary/Button";
import { Heading } from "@/components/ErrorBoundary/Heading";
import { Text } from "@/components/ErrorBoundary/Text";
import { useTranslate } from "@/translations/useTranslate";
import type { PageErrorProps } from "@/types/ErrorBoundaryTypes/pageErrorProps.types";
import { memo, useMemo } from "react";

export const PageError = memo<PageErrorProps>(
    ({
        title,
        message,
        icon = "⚠️",
        onRetry,
        noCenter,
        retryText,
        className = "",
        containerClassName = "",
        fullPage = false,
    }: PageErrorProps) => {
        const { t } = useTranslate();
        const containerClasses = useMemo(() => {
            const baseContainerClasses = noCenter ? "flex" : "flex items-center justify-center";
            return fullPage
                ? `${baseContainerClasses} min-h-screen ${containerClassName}`
                : `${baseContainerClasses} py-12 ${containerClassName}`;
        }, [fullPage, containerClassName]);

        return (
            <div className={containerClasses}>
                <div className={`flex flex-col items-center ${className}`}>
                    <Text size="4xl" className="mb-4" color="danger" as="div">
                        {icon}
                    </Text>

                    <Heading level={3} size="lg" color="danger" className="mb-2">
                        {title || t("page_error.default_title")}
                    </Heading>

                    {message && (
                        <Text size="sm" color="muted" align="center" className="mb-6 max-w-md mx-auto">
                            {message}
                        </Text>
                    )}

                    {onRetry && (
                        <Button variant="danger" onClick={onRetry}>
                            {retryText || t("page_error.retry_text")}
                        </Button>
                    )}

                    <Button variant="danger" className="mt-4" onClick={() => (window.location.href = "/")}>
                        {t("page_error.back_to_home")}
                    </Button>
                </div>
            </div>
        );
    }
);
