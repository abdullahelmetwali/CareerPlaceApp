export const useRandomColor: (num: number) => string = (num) => {
    const randomChannel = () => Math.floor(100 + Math.random() * (90 - num + 1)) + 150;
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    return `rgb(${r},${g},${b})`
}