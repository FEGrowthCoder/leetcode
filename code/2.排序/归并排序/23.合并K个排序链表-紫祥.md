## 排序链表

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例 1:

> 输入: [
            1->4->5,
            1->3->4,
            2->6
        ]
>
> 输出: 1->1->2->3->4->4->5->6

## 题解分析

我因为刚做完排序链表就做的这个题，思维就是把链表合并，然后走归并的思路

## 代码片段

```JS
var mergeKLists = function(lists) {
    let len  = lists.length;
    if(len == 0) return null;
    if(len == 1) return lists[0];
    let heap = new ListNode();
    heap.next = lists[0];
    for(let i = 1;i<len;i++){
        let cur1 = heap.next;
        let cur2 = lists[i];
        let origh = heap;
        while(cur1 != null&&cur2 != null){
            if(cur1.val>= cur2.val) {
                origh.next = cur2;
                cur2 = cur2.next;
            }else{
                origh.next = cur1;
                cur1 = cur1.next;
            }
            origh = origh.next;
        }
        if(cur1) origh.next = cur1;
        if(cur2) origh.next = cur2;
    }
    return heap.next;
};
```

## 复杂度分析

时间复杂度：O(n ^ 2)
空间复杂度：O(1)