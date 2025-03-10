export const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length === 0) return "";
    if (numbers.length <= 1) return `+${numbers}`;
    if (numbers.length <= 4) return `+${numbers[0]} ${numbers.slice(1)}`;
    if (numbers.length <= 8)
        return `+${numbers[0]} ${numbers.slice(1, 4)} ${numbers.slice(4)}`;
    return `+${numbers[0]} ${numbers.slice(1, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 11)}`;
};
