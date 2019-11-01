## 有序矩阵中第K小的元素

给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例 :

> 输入: matrix = [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
    ],
    k = 8,
>
> 输出: 1->2->3->4


## 题解分析

采用sort()方法实现快速排序

sort()方法的原理是，当元素小于十个时候实现插入排序，当元素大于十个时候实现快速排序

## 代码片段

```JS
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let newArr = [];
    let ascendArr = [];
    for (let i = 0;i < n;i++) {
        newArr.push(...matrix[i]);
    }
    ascendArr = newArr.sort((a, b) => {return a - b}); 
    return ascendArr[k - 1];
};
```

## 复杂度分析

时间复杂度：O(n log n)
空间复杂度：O(n)