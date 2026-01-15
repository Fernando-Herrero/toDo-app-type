import type { TextProps } from "@/types/ErrorBoundaryTypes/text.types";
import classNames from "classnames";
import { forwardRef, type ElementType } from "react";

/**
 * Componente Text para renderizar texto con diferentes estilos, variantes y opciones tipográficas.
 * Proporciona control granular sobre la apariencia del texto manteniendo consistencia en el diseño.
 *
 * @param {Object} props - Propiedades del componente
 *
 * ⚡ Optimizado con interpolación directa para size, weight, align, transform, decoration y leading.
 * 🎨 Utiliza variables CSS del design system para colores semánticos (primary, secondary, success, etc.).
 *
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido del texto
 * @param {string} props.size - Tamaño del texto (xs, sm, base, lg, xl, 2xl)
 * @param {string} props.weight - Peso de la fuente (thin, light, normal, medium, semibold, bold, extrabold, black)
 * @param {string} props.color - Color del texto (default, primary, secondary, success, warning, danger, info, muted, white, black)
 * @param {string} props.variant - Variante de estilo (body, caption, label, code, kbd, muted, small, lead)
 * @param {string} props.align - Alineación del texto (left, center, right, justify)
 * @param {string} props.transform - Transformación del texto (none, uppercase, lowercase, capitalize)
 * @param {string} props.decoration - Decoración del texto (none, underline, overline, line-through)
 * @param {string} props.leading - Altura de línea (none, tight, snug, normal, relaxed, loose)
 * @param {boolean} props.truncate - Si truncar el texto con ellipsis
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.as - Elemento HTML a renderizar (por defecto 'p')
 * @param {string} props.id - ID del elemento
 * @param {Object} ref - Referencia al elemento DOM
 * @returns {React.ForwardRefExoticComponent} Componente Text
 *
 * @example
 * <Text variant="lead" size="lg">
 *   Texto introductorio destacado
 * </Text>
 *
 * @example
 * <Text variant="code" as="span">
 *   console.log('Hello World')
 * </Text>
 */
export const Text = forwardRef<HTMLElement, TextProps>(
    (
        {
            children,
            size = "base",
            weight = "normal",
            color = "default",
            variant = "body",
            align = "left",
            transform = "none",
            decoration = "none",
            truncate = false,
            leading = "normal",
            className = "",
            as = "p",
            id,
            ...props
        },
        ref
    ) => {
        const colorClasses = {
            default: "text-gray-700",
            primary: "text-brand-400",
            secondary: "text-secondary",
            success: "text-success-600",
            warning: "text-warning-600",
            danger: "text-error-600",
            info: "text-blue-600",
            muted: "text-gray-500",
            white: "text-white",
            black: "text-black",
        } as const;

        const variantClasses = {
            body: "leading-relaxed",
            caption: "leading-tight text-sm text-gray-600",
            label: "leading-none font-medium text-sm",
            code: "font-mono bg-gray-100 px-2 py-1 rounded-md text-sm border",
            kbd: "font-mono bg-gray-800 text-white px-2 py-1 rounded text-sm shadow-sm border",
            muted: "text-gray-500",
            small: "text-sm text-gray-600",
            lead: "text-xl leading-relaxed text-gray-600",
        } as const;

        const alignClasses = {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        } as const;

        const textClasses = classNames(
            "leading-relaxed",

            `text-${size}`,
            `font-${weight}`,
            colorClasses[color],
            alignClasses[align],
            transform && transform !== "none" ? transform : "",
            decoration && decoration !== "none" ? decoration : "",
            leading && leading !== "normal" ? `leading-${leading}` : "",

            variantClasses[variant],

            {
                truncate: truncate,
            },

            className
        );

        const Component = as as ElementType;

        return (
            <Component ref={ref} className={textClasses} id={id} {...props}>
                {children}
            </Component>
        );
    }
);

Text.displayName = "Text";
