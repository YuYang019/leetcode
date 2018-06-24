/**
 * 求最长公共子序列
 */

function createArray(a: number, b: number): number[] {
  const result = new Array();
  for (let i = 0; i <= a; i++) {
    result[i] = new Array();
    // 多生成一列，都是0，为了方便处理 i - 1
    for (let j = 0; j <= b; j++) {
      result[i][j] = 0
    }
  }
  return result;
}

// 也是先求最大长度，再求字符串
// 先列递推公式
// dp[i][j] = 0 (i = 0 || j = 0)
// dp[i][j] = dp[i-1][j-1] + 1 (i > 0, j > 0, str1[i] === str2[j])
// dp[i][j] = max(dp[i-1][j], dp[i][j-1]) (str1[i] !== str2[j])
// 这为什么要考虑str1[i] !== str2[j] 的情况，这个求公共子串不一样，因为序列是可以不连续的，所以必须每个都对比，而子串只需要沿对角线比就行了
function findSubSequence(str1: string, str2: string): string {
  const dp = createArray(str1.length, str2.length);
  // 用于查找纪录方向
  const temp = createArray(str1.length, str2.length);
  let len
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (str1[i] === str2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        // 表示方向为斜上方↖
        temp[i][j] = 1
      } else {
        if (dp[i - 1][j] >= dp[i][j - 1]) {
          dp[i][j] = dp[i - 1][j]
          // 表示上方↑
          temp[i][j] = 3
        } else {
          dp[i][j] = dp[i][j - 1]
          // 表示左方←
          temp[i][j] = 2
        }
      }
      len = dp[i][j]
    }
  }
  
  // 顺序是先向上寻找，再向左寻找
  function printLCS(temp, str1, i, j) {
    if (i === 0 || j === 0) return

    if (temp[i][j] === 1) {
      // 方向为斜上方
      printLCS(temp, str1, i - 1, j - 1)
      console.log(str1[i - 1])
    } else if (temp[i][j] === 2) {
      // 方向为左
      printLCS(temp, str1, i , j - 1)
    } else {
      // 方向为上
      printLCS(temp, str1, i - 1, j)
    }
  }
  console.log(temp)
  printLCS(temp, str1, str1.length, str2.length)

  return len
}

console.log(findSubSequence('acbrd', 'alskdcsdb'))