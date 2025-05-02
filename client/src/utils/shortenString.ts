export const shortenString = (str: string): string => {
    return `${str.substring(0, 4)}...${str.slice(-4)}`;
};