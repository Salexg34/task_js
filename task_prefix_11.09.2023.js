/**
 * @param {string[]} strs
 * @return {string}
 */
const strs = ["flower","fow","flight"]
 function longestCommonPrefix(strs) {
    if (strs == 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (strs[i][j] != prefix[j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
        if (prefix == '') {
            return '';
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(strs));