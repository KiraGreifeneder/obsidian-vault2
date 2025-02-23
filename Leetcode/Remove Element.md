---
number: 27
difficulty: Easy
runtime-beats: 97.06
memory-beats: 73.16
hints-used: "0"
status: true
---
## Task
---
Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm). The order of the elements may be changed. Then return _the number of elements in_ `nums` _which are not equal to_ `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

**Example 1:**
```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**
```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```
## Intuition and Brainstorming
---
![[_attachments/Remove Element 2024-08-28 20.38.06.excalidraw]]

Well, as it turns out, there is a much easier solution. We use `a` and `b` again, but this time with both starting at idx 0. `b` increases with each iteration, "looking ahead" so to speak, and if it is not `val`, we replace `nums[a]` with it until we reach the end. In the beginning, a number may simply replace itself, but every field simply gets replaced with valid values as long as possible, leading to an O(n) time complexity. 
## Implementation
---
```
function removeElement(nums: number[], val: number): number {
    let a = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[a] = nums[i];
            a++;
        }
    }

    return a;
};
```