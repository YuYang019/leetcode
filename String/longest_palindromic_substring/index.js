/**
 * 给定一个字符串，返回最长的回文子串
 */
// 思路：中心扩展法。遍历字符串的每一个字符，如果存在回文子串，那么中心是某一字符（奇数）或两个字符的空隙（偶数），然后分两种情况向两边扩展
// 因为回文字符串是以中心轴对称，所以如果我们从下标 i 出发，用2个指针向 i 的两边扩展判断是否相等，那么只需要对0到len - 1的下标都做此操作，
// 就可以求出最长回文子串
function longestPalindrome(s) {
    var start = 0;
    var end = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i); // 奇数情况
        var len2 = expandAroundCenter(s, i, i + 1); // 偶数情况
        var len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return s.substring(start, end + 1);
}
function expandAroundCenter(s, left, right) {
    var L = left;
    var R = right;
    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}
//# sourceMappingURL=index.js.map