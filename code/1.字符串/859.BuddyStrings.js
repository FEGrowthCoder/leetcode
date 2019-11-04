/**
 * 亲密字符串
 * https://leetcode-cn.com/problems/buddy-strings/description/
 * 解题思路
 * 
 * 亲密字符串长度相等
 * 如果是亲密字符串的话，存在0对或者2对不等的情况
 * 如果A B相等 那么如果A/B中存在重复字符，则A B为亲密字符串
 * 如果2对不等 则需要找出不等的索引
 * 比较A[i] == B[j] && A[j] == B[i] && length == 2
 * 则为亲密字符串
 */

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  var A_len = A.length
  var B_len = B.length
  var diff = []

  if (A_len != B_len) return false

  // 如果A B相等，并且A/B中存在重复字符，说明是亲密字符串
  if (A == B && new Set(A.split('')).size < A_len) return true

  for (var i = 0; i < A_len; i++) {
    if (A[i] !== B[i]) {
      // 找出不同的索引
      diff.push(i)
    }
  }

  return (diff.length == 2 && A[diff[0]] == B[diff[1]] && A[diff[1]] == B[diff[0]])
};

console.log(buddyStrings('aaaabb', 'ccc'))