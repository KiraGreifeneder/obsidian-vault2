---
number: 26
difficulty: Easy
runtime-beats: 98.52
memory-beats: 88.43
hints-used: "0"
status: true
---
## Task
---
Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**. Then return _the number of unique elements in_ `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

Leetcode used a custom judge to check not only the return value but also the array.

**Example 1:**
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation:   Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**
```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## Intuition and Brainstorming
---
![[_attachments/Remove Duplicates from Sorted Array 2024-08-28 19.03.55.excalidraw]]
## Implementation
---
```ts
function removeDuplicates(nums: number[]): number {
    let a = 0;
    let b = 1;

    while (b < nums.length) {
        if (nums[b] > nums[a]) {
            nums[++a] = nums[b];
        }
        b++;
    }
    return a + 1;
};
```

I'm happy with this one, simple and I managed to get all the logic down first try, finding mistakes before submission.

Initially, it was somewhat slow, as I was tracking the number of unique values in a separate variable and had an if statement at the beginning to do an early return if the array size was <= 1. The constraints allow for omission of it though, speeding everything up significantly.