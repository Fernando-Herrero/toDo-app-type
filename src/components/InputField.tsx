import type { InputFieldProps } from "@/types/form.types";

export const InputField = ({ label, type = "text", name, value, onChange, placeholder }: InputFieldProps) => (
    <label className="flex flex-col gap-1">
        <span className="text-login">{label}</span>
        <input
            className="border border-gray-600 text-gray-800 dark:text-gray-200 rounded p-1 placeholder-shown:text-gray-600"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </label>
);
