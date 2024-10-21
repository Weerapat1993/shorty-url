export const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const random = (mn: number, mx: number) => Math.floor(Math.random() * (mx - mn + 1) + mn);
export const randomInArray = (arr: any[]): any => {
    if(arr.length === 1) {
        return arr[0];
    } else if(arr.length === 0) {
        return null;
    }
    return arr[random(1, arr.length) - 1];
}
