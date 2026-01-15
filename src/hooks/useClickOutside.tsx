import { useEffect, useRef, type RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(
    callback: () => void,
    isActive: boolean = true
): RefObject<T | null> => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!isActive) return;

        const handleClickOutside = (event: Event) => {
            if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, isActive]);

    return ref;
};
