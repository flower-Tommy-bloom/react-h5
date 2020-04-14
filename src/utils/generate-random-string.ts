/**
 * @author：me
 * @description：生成随机字符串
 * @date：2020/3/18
 */

export function generateRandomString(len: number) {
    let i = 0;
    let str = '';
    const base = 19968;
    const range = 10;
    // 19968 至 40869
    while (i < len) {
        i++;
        const lower = parseInt('' + Math.random() * range);
        str += String.fromCharCode(base + lower);
    }
    return str;
}
