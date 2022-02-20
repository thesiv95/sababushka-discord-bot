/**
 * Get random rounded integer (taken from MDN)
 * @param min 
 * @param max 
 * @returns 
 */
const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomInt;