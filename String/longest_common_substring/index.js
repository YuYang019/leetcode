/**
 * 求两字符串的最长公共子串
 */
function createArray(a, b) {
    var result = new Array();
    for (var i = 0; i <= a; i++) {
        result[i] = new Array();
        // 多生成一列，都是0，为了方便处理 i - 1
        for (var j = 0; j <= b; j++) {
            result[i][j] = 0;
        }
    }
    return result;
}
function getString(index, len, str) {
    if (len === 0)
        return '';
    return str.substring(index - len + 1, index + 1);
}
// 思路，动态规划，先找到公共子串最大长度，再找字符串
// dp[i][j]表示两字符串下标分别到i，j时的子串最大长度
// 如果 str1[i] === str2[j]，且i，j>0，则 dp[i][j] = dp[i-1][j-1] + 1;
// 这个递推公式怎么来的？
// 其实如果打印出数组，可以很容易发现，求最长公共子串长度，就是看对角线的长度
// 不同于子序列，子串要求是连续的，所以当 str1[i] === str2[j] 时，那么dp[i][j]就应该是对角线上，左上方dp[i-1][j-1]的值加1
// 另一种理解，如果str1[i] === str2[j]，那么只需要在i-1,j-1后面加同一个字符就行了，长度只需+1
function findSubstring(str1, str2) {
    var dp = createArray(str1.length, str2.length);
    var maxLen = 0;
    var index = 0;
    for (var i = 1; i <= str1.length; i++) {
        for (var j = 1; j <= str2.length; j++) {
            if (str1[i] === str2[j]) {
                if (i > 0 && j > 0) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                else {
                    dp[i][j] = 1;
                }
            }
            else {
                dp[i][j] = 0;
            }
            if (dp[i][j] > maxLen) {
                maxLen = dp[i][j];
                index = i;
            }
        }
    }
    console.log(dp);
    var result = getString(index, maxLen, str1);
    return result;
}
console.log(findSubstring('abcdefg', 'ehcdefds'));
//# sourceMappingURL=index.js.map