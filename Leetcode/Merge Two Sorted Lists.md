---
number: 21
difficulty: Easy
runtime-beats: 81.04
memory-beats: 22.45
status: true
hints-used: "0"
---
## Intuition, initial brainstorming
Pretty sure we've done this at uni. 
- Go through the list, store the current nodes at each step
- take the smaller node and add it to the merged list, then advance in the list it was taken from
- continue until done

## My implementation
```ts
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) return null;

    let curr1 = list1;
    let curr2 = list2;

    let mergedHead = next(curr1, curr2);
    let mergedCurr = mergedHead;

    if (mergedHead.val === curr1?.val) {
        curr1 = curr1.next;
    } else {
        curr2 = curr2.next;
    }

    while (!(curr1 == null && curr2 == null)) {
        if (next(curr1, curr2).val === curr1?.val) {
            mergedCurr.next = curr1;
            curr1 = curr1.next;
        } else {
            mergedCurr.next = curr2;
            curr2 = curr2.next;
        }
        mergedCurr = mergedCurr.next;
    }

    return mergedHead;
};

function next(curr1: ListNode | null, curr2: ListNode | null): ListNode {
    if (curr1 === null) {
        return curr2;
    } else if (curr2 === null) {
        return curr1;
    } else if (curr1.val <= curr2.val) {
        return curr1;
    } else {
        return curr2;
    }
}
```

runtime beats 81%, memory only 22%...
This was a fucking nightmare because I didn't want loads of code repetition, but i managed to do that anyways... I'm realizing now though that i could just keep the same list instead of making a new one.