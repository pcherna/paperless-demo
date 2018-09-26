// Simple delayed promise
export const Delay = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms));
