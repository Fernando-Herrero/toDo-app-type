import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
    const [state, setState] = useState<boolean>(!!initialValue);

    const toggleState = (): void => {
        setState((prev) => !prev);
    };

    const setTrue = (): void => {
        setState(true);
    };

    const setFalse = (): void => {
        setState(false);
    };

    return [state, toggleState, setTrue, setFalse] as const;
};
