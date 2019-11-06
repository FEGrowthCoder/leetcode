# 代码提交格式

请按照以下代码提交格式提交：

## 题目标题

给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:
```
matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
],
k = 8,

返回 13。

```
## 题解分析

需要将矩阵转化为一维数组，对其进行排序，取出第K位元素

## 代码片段

```
var kthSmallest = function(matrix, k) {
  let a = [];
  for(let i = 0; i < matrix.length; i++) {
    a = a.concat(matrix[i]);
  }
  return heapSort(a)[k-1];
};

// ES6
// [a,b] = [b,a];

// 调整堆 调整为大顶堆
function heapAjust(data, i, len) {
  let child = 2 * i + 1; // 左子节点

  while(child <= len) {
    // 如果右子节点存在 且大于左节点值，child指向右节点
    if (child + 1 <= len && data[child] < data[child + 1]) {
      child = child + 1;
    }
    // 入股当前节点值小于子节点 互换
    if (data[child] > data[i]) {
      [data[i], data[child]] = [data[child], data[i]];
      i = child;
      child = 2 * i + 1;
    } else {
      break;
    }
  }
}
// 堆排序
function heapSort(A) {
  // 建堆 从后往前 从右向左 构建大顶堆
  for(let i = Math.floor((A.length - 2) / 2); i >= 0; i--) {
    heapAjust(A, i, A.length);
  }
  // 堆排序 最下面元素与堆顶元素交换
  for(let j = A.length - 1; j > 0; j--) {
    [A[j], A[0]] = [A[0], A[j]];
    // 大顶推排序 从顶向下调整堆 移到尾部的不参与排序 最后效果从小到大排序
    heapAjust(A, 0, j - 1);
  }
  return A;
}
```

## 复杂度分析
时间复杂度：O(n log n)